import { Matcher, Match } from '@zxcvbn-ts/core';

export const uppercaseMatcher: Matcher = {
  Matching: class UppercaseMatcher {
    match({ password }: { password: string }): Match[] {
      const matches: Match[] = [];
      for (const char of password) {
        if (char >= 'A' && char <= 'Z') {
          return matches;
        }
      }
      matches.push({ pattern: 'uppercaseRequired', token: password, i: 0, j: password.length - 1 });
      return matches;
    }
  },
  feedback: options => {
    return {
      warning: options.translations.warnings['uppercaseRequired'] || 'uppercaseRequired',
      suggestions: [options.translations.suggestions['uppercaseRequired'] || 'uppercaseRequired'],
    };
  },
  scoring() {
    return -100;
  },
};

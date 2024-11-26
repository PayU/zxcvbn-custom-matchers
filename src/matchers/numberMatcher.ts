import { Matcher, Match } from '@zxcvbn-ts/core';

export const numberMatcher: Matcher = {
  Matching: class NumberMatcher {
    match({ password }: { password: string }): Match[] {
      const matches: Match[] = [];
      for (const char of password) {
        if (char >= '0' && char <= '9') {
          return matches;
        }
      }
      matches.push({ pattern: 'numberRequired', token: password, i: 0, j: password.length - 1 });
      return matches;
    }
  },
  feedback: options => {
    return {
      warning: options.translations.warnings['numberRequired'] || 'numberRequired',
      suggestions: [options.translations.suggestions['numberRequired'] || 'numberRequired'],
    };
  },
  scoring() {
    return -100;
  },
};

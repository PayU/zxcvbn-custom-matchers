import { Matcher, Match } from '@zxcvbn-ts/core/dist/types';

export const specialMatcher: Matcher = {
  Matching: class SpecialMatcher {
    match({ password }: { password: string }): Match[] {
      const matches: Match[] = [];
      const specialChars = "!@#$%^&*()_+[]{}|;:',.<>?/";
      for (const char of password) {
        if (specialChars.includes(char)) {
          return matches;
        }
      }
      matches.push({ pattern: 'special', token: password, i: 0, j: password.length - 1 });
      return matches;
    }
  },
  feedback(_match) {
    return { warning: 'Include at least one special character.', suggestions: [] };
  },
  scoring(_match) {
    return -100;
  },
};

/// <reference types="jest" />

declare namespace jest {
  interface Expect {
    <T = unknown>(
      actual: T,
      message?: string,
      options?: { showMatcherMessage?: boolean; showPrefix?: boolean; showStack?: boolean }
    ): unknown
  }
}

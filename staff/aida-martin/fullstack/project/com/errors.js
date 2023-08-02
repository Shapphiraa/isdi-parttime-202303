export class DuplicityError extends Error {
  constructor(message) {
    super(message);
  }

  get name() {
    return DuplicityError.name;
  }
}

export class ContentError extends Error {
  constructor(message) {
    super(message);
  }

  get name() {
    return ContentError.name;
  }
}

export class ExistenceError extends Error {
  constructor(message) {
    super(message);
  }

  get name() {
    return ExistenceError.name;
  }
}

export class AuthError extends Error {
  constructor(message) {
    super(message);
  }

  get name() {
    return AuthError.name;
  }
}

export class PropertyError extends Error {
  constructor(message) {
    super(message);
  }

  get name() {
    return PropertyError.name;
  }
}

export class UnknownError extends Error {
  constructor(message) {
    super(message);
  }

  get name() {
    return UnknownError.name;
  }
}

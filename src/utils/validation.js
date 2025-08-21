// src/utils/validation.js
export const isNonEmptyString = (value) => {
      return typeof value === 'string' && value.trim() !== '';
    };
    // We'll add more validation functions here in later, more complete labs.
    // For now, this is enough for our test.
    export const validateBook = (book) => {
        const errors = {};
        if (!isNonEmptyString(book.title)) {
            errors.title = 'Title is required.';
        }
        // Add more checks here if needed for other fields like author, totalPages
        return errors;
    };
    
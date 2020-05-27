export class Validation {
  private static _validatorsPatterns = {
    'cyrillic_latin_numbers': '^[а-яА-ЯёЁa-zA-Z0-9]+$',
    'cyrillic_latin_numbers_space': '^[а-яА-ЯёЁa-zA-Z0-9 ]+$',
    'cyrillic_latin_numbers_space_dot_comma_dash': '^[а-яА-ЯёЁa-zA-Z0-9 .,-]+$',
    'letters_numbers_space': '^[a-zA-Z0-9 ]+$',
    //(Строчные и прописные латинские буквы, цифры. хотябы по 1 для каждой):
    'password': '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$',
    //email validation
    'email': '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$',
    //(цифры)
    'numbers': '^[0-9]+$',
    'month': '0[1-9]|1[012]',
    'year': '(20)\\d\\d',

    'credit_card_number': '[0-9]',
    'phone_number': '[0-9]{2} [0-9]{3} [0-9]{2} [0-9]{2}',
    'wallet_balance': '^[0-9]+$',

    'cost_BYN': '([1-9]{2}|[0-9]{1}).[0-9]{2}'
  }

  private static _validationMessages = {
    // Names
    'username': [
      {type: 'required', message: 'Username is required'},
      {type: 'minlength', message: 'Username must be at least 3 characters long'},
      {type: 'maxlength', message: 'Username cannot be more than 15 characters long'},
      {type: 'pattern', message: 'Your username must contain only numbers and letters'},
      {type: 'validUsername', message: 'Your username has already been taken'}
    ],
    'first_name': [
      {type: 'required', message: 'First name is required'},
      {type: 'minlength', message: 'First name must be at least 3 characters long'},
      {type: 'maxlength', message: 'First name cannot be more than 15 characters long'},
      {type: 'pattern', message: 'Your first name must contain only numbers and letters'},
    ],
    'second_name': [
      {type: 'required', message: 'Second name is required'},
      {type: 'minlength', message: 'Second name must be at least 3 characters long'},
      {type: 'maxlength', message: 'Second name cannot be more than 15 characters long'},
      {type: 'pattern', message: 'Second name username must contain only numbers and letters'},
    ],
    //
    // Phone
    'phone_number': [
      {type: 'required', message: 'Phone number is required'},
      {type: 'pattern', message: 'Phone number format 111 11 11'},
    ],
    //
    // Email
    'email': [
      {type: 'required', message: 'Email is required'},
      {type: 'email', message: 'Enter a valid email'}
    ],
    //
    // Password
    'password': [
      {type: 'required', message: 'Password is required'},
      {type: 'minlength', message: 'Password must be at least 6 characters long'},
      {type: 'maxlength', message: 'Password cannot be more than 15 characters long'},
      {type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number'}
    ],
    'confirm_password': [
      {type: 'required', message: 'Confirm password is required'},
      {type: 'areEqual', message: 'Password mismatch'}
    ],
    //
    // Wallet
    'wallet_name': [
      {type: 'required', message: 'Confirm password is required'},
      {type: 'minlength', message: 'Wallet name must be at least 3 characters long'},
      {type: 'maxlength', message: 'Wallet name cannot be more than 15 characters long'},
      {type: 'pattern', message: 'Wallet name must contain only numbers and letters'},
    ],
    'wallet_balance': [
      {type: 'pattern', message: 'Balance must contain only numbers'}
    ],
    'deposit_value': [
      {type: 'required', message: 'Enter deposit value'},
      {type: 'maxlength', message: 'Deposit  cannot be more than 6 characters long'},
      {type: 'pattern', message: 'Deposit value must contain only numbers'}
    ],
    //
    // Credit card
    'card_number': [
      {type: 'required', message: 'Card number is required'},
      {type: 'minlength', message: 'Wallet name must be at least 13 characters long'},
      {type: 'maxlength', message: 'Wallet name cannot be more than 16 characters long'},
      {type: 'pattern', message: 'Card number must contain only numbers'}
    ],
    'month_of_ending': [
      {type: 'required', message: 'Month of ending is required'},
      {type: 'pattern', message: 'Month range from 1 to 12'}
    ],
    'year_of_ending': [
      {type: 'required', message: 'Year of ending is required'},
      {type: 'pattern', message: 'Year range from 2000 to 2099'}
    ],
    'CVV': [
      {type: 'required', message: 'CVV is required'},
      {type: 'maxlength', message: 'CVV must be 3 characters long'},
      {type: 'pattern', message: 'CVV must be 3 characters long'}
    ],
    'card_owner': [
      {type: 'required', message: 'Card owner is required'},
      {type: 'pattern', message: 'Card owner name must contain only numbers and letters'},
    ],
    //
    // Cinema
    'cinema_name': [
      {type: 'required', message: 'Cinema name is required'},
      {type: 'minlength', message: 'Cinema name name must be at least 6 characters long'},
      {type: 'maxlength', message: 'Cinema name cannot be more than 25 characters long'},
      {type: 'pattern', message: 'Cinema name must contain only numbers, letters and spaces'}
    ],
    'cinema_address': [
      {type: 'required', message: 'Cinema address is required'},
      {type: 'minlength', message: 'Cinema address must be at least 6 characters long'},
      {type: 'maxlength', message: 'Cinema address cannot be more than 25 characters long'},
      {type: 'pattern', message: 'Cinema address must contain only numbers, letters and spaces'}
    ],
    //
    // Session
    'place_cost_BYN': [
      {type: 'required', message: 'Place cost is required'},
      {type: 'maxlength', message: 'Place cost cannot be more than 99.99 BYN'},
      {type: 'pattern', message: 'Place cost must be like 99.99 BYN or 9.99'}
    ],
    'session_date': [
      {type: 'required', message: 'Session date is required'},
    ],
    'session_time': [
      {type: 'required', message: 'Session time is required'},
    ],
  }

  public static get validatorsPatterns() {
    return this._validatorsPatterns;
  }


  public static get validationMessages() {
    return this._validationMessages;
  }
}

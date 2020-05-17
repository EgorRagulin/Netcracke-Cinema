export class Validation {
  private static _validatorsPatterns = {
    //(латиница + кириллица + цифры)
    'username': '^[а-яА-ЯёЁa-zA-Z0-9]+$',
    'first_name': '^[а-яА-ЯёЁa-zA-Z0-9]+$',
    'second_name': '^[а-яА-ЯёЁa-zA-Z0-9]+$',
    'wallet_name': '^[а-яА-ЯёЁa-zA-Z0-9]+$',
    //(Строчные и прописные латинские буквы, цифры. хотябы по 1 для каждой):
    'password': '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$',
    //email validation
    'email': '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$',
    //(цифры)
    'credit_card': '[0-9]{13,16}',
    'phone_number': '[0-9]{2} [0-9]{3} [0-9]{2} [0-9]{2}',
    'wallet_balance': '^[0-9]+$',
  }

  private static _validationMessages = {
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
    'phone_number': [
      {type: 'required', message: 'Phone number is required'},
      {type: 'pattern', message: 'Phone number format 111 11 11'},
    ],
    'email': [
      {type: 'required', message: 'Email is required'},
      {type: 'email', message: 'Enter a valid email'}
    ],
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
    'wallet_name': [
      {type: 'required', message: 'Confirm password is required'},
      {type: 'minlength', message: 'Second name must be at least 3 characters long'},
      {type: 'maxlength', message: 'First name cannot be more than 15 characters long'},
      {type: 'pattern', message: 'Your first name must contain only numbers and letters'},
    ],
    'wallet_balance': [
      {type: 'pattern', message: 'Balance must contain only numbers'}
    ]
  }

  public static get validatorsPatterns() {
    return this._validatorsPatterns;
  }


  public static get validationMessages() {
    return this._validationMessages;
  }
}

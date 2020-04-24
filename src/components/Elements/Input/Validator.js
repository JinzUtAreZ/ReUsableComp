const regex = {
  email: new RegExp(
    '^(([^<>()\\[\\]\\\\.,;:\\s@]+(\\.[^<>()\\[\\]\\\\.,;:\\s@]+)*)|(.+))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'
  ),
  number: new RegExp('^[0-9]+$'),
  money: new RegExp('^\\$?\\d+(,\\d{3})*(\\.\\d*)?$'),
};

export class Validators {
  static email(value, message) {
    if (value) {
      const result = regex.email.test(value);
      if (!result) return { error: true, message };
    }
    return false;
  }

  static required(value, message) {
    if (!value || !value.toString().trim().length) {
      return { error: true, message };
    }
    return false;
  }

  static number(value, message) {
    const length = value ? value.toString().length : 0;

    if (length > 0) {
      const result = regex.number.test(value);
      if (!result) {
        return { error: true, message };
      }
    }
    return false;
  }

  static money(value, message) {
    const length = value ? value.toString().length : 0;

    if (length > 0) {
      const result = regex.money.test(value);
      if (!result) {
        return { error: true, message };
      }
    }
    return false;
  }
}

function msgData(value) {
  let val = '';
  if (value === 'required') {
    val = 'This field is required';
  }
  if (value === 'email') {
    val = 'Email format is incorrect';
  }
  if (value === 'number') {
    val = 'Numbers only';
  }
  return val;
}

export const validateInput = (validators, value) => {
  if (validators && validators.length) {
    for (let i = 0; i < validators.length; i++) {
      //const error = validators[i].check(value);
      let message = msgData(validators[i].name);
      const error = validators[i](value, message);
      if (error) {
        return error;
      }
    }
  }
  return false;
};

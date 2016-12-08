const validationFuncs = {
  NON_EMPTY: a => !!a.toString().length,
  NOT_NULL: a => a !== null,
};

const required = key => `Please enter ${key}`;
const getMessage = key => required(key);

const rules = {
  title: {
    validate: validationFuncs.NON_EMPTY,
    getMessage,
  },
  recipient: {
    validate: validationFuncs.NON_EMPTY,
    getMessage,
  },
  date: {
    validate: validationFuncs.NOT_NULL,
    getMessage,
  },
  time: {
    validate: validationFuncs.NOT_NULL,
    getMessage,
  },
};

export default function validation(task) {
  const validate = {};

  for (const item in rules) {
    if ({}.hasOwnProperty.call(rules, item)) {
      const rule = rules[item];
      const value = task[item];

      if (!rule.validate(value)) {
        validate[item] = rule.getMessage(item);
      }
    }
  }

  return validate;
}

const validationFuncs = {
  NON_EMPTY: (a) => {
    return !!a.toString().length;
  },
  NOT_NULL: (a) => {
    return a !== null;
  }
};

const rules = {
  title: {
    validate: validationFuncs.NON_EMPTY,
    getMessage: key => required(key)
  },
  recipient: {
    validate: validationFuncs.NON_EMPTY,
    getMessage: key => required(key)
  },
  date: {
    validate: validationFuncs.NOT_NULL,
    getMessage: key => required(key)
  },
  time: {
    validate: validationFuncs.NOT_NULL,
    getMessage: key => required(key)
  }
};

const required = key => `Please enter ${key}`;

export default function validation(task) {
  const validate = {};

  for (const item in rules) {
    const rule = rules[item];
    const value = task[item];

    if (!rule.validate(value)) {
      validate[item] = rule.getMessage(item);
    }
  }

  return validate
}

const rules = {
  title: {
    required: true
  },
  recipient: {
    required: true
  },
  date: {
    required: true
  },
  time: {
    required: true
  },
  repeatEveryDay: {
    required: false
  },
  repeatEveryWeek: {
    required: false
  }
};

const required = (value, key) => value ? '' : `Please enter ${key}`;

const checkInvalid = (validate) => {
  for (const rule in validate) {
    if (validate.hasOwnProperty(rule) && rule !== 'invalid') {
      if (validate[rule]) {
        validate.invalid = true;
        break;
      }
    }
  }
};

export default function (task) {
  const validate = {
    invalid: false,
  };
  for (const item in task) {
    if (task.hasOwnProperty(item)) {
      if (rules[item].required) {
        validate[item] = required(task[item], item);
      }
    }
  }
  checkInvalid(validate);
  return validate
}

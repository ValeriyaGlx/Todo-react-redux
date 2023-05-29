export function nameValidation(value) {
    let text;
    const name = value.replace(/[^a-zA-Zа-яА-ЯёЁ .]/i, "").trimStart();
    if (name.length === 0) {
      text = `This field is empty`;
    } else {
      if (name[0] !== name[0].toUpperCase()) {
        text = `You should start the Name with a capital letter`;
      } else {
        text = "";
      }
    }
    return name;
  }

export function addError(value) {
    let text;
    const name = value.replace(/[^a-zA-Zа-яА-ЯёЁ .]/i, "").trimStart();
    if (name.length === 0) {
      text = `This field is empty`;
    } else {
      if (name[0] !== name[0].toUpperCase()) {
        text = `You should start the Name with a capital letter`;
      } else {
        text = "";
      }
    }
    return text;
}
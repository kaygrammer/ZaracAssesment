import otpGenerator from "otp-generator";

export default function generateUniqueIdentifier() {
  return otpGenerator.generate(4, {
    upperCaseAlphabets: false,
    specialChars: false,
    lowerCaseAlphabets: false,
  });
}

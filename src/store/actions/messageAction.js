export function getErrorMessage(payload) {
  return { type: 'GET_ERROR_MESSAGE', payload };
}
  
export function getSuccessMessage(payload) {
  return { type: 'GET_SUCCESS_MESSAGE', payload };
}
  
export function resetErrorMessage() {
  return { type: 'RESET_ERROR_MESSAGE' };
}
  
export function resetSuccessMessage() {
  return { type: 'RESET_SUCCESS_MESSAGE' };
}
  
export function resetMessageState() {
  return { type: 'RESET_MESSAGE_STATE' };
}
  
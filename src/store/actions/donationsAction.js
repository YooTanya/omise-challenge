export function updateTotalDonation(payload) {
  return { type: 'UPDATE_TOTAL_DONATE', payload };
}
  
export function resetTotalDonation() {
  return { type: 'RESET_TOTAL_DONATE' };
}
  
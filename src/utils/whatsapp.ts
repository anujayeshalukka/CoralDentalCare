/**
 * Utility to generate WhatsApp links with pre-filled messages.
 * Centralizing this ensures consistency across the website.
 */

const MAIN_WHATSAPP = '919747612370';
const DENTIST_WHATSAPP = '918078057619';

const DEFAULT_MESSAGE = "Hello! I'm interested in booking an appointment or learning more about the dental services at Coral Dental Care.";
const QUESTION_MESSAGE = "Hello! I have a question regarding my dental health or a treatment. Could you please help me?";

/**
 * Returns a wa.me link for general inquiries.
 */
export const getWhatsAppLink = (message: string = DEFAULT_MESSAGE): string => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${MAIN_WHATSAPP}?text=${encodedMessage}`;
};

/**
 * Returns a wa.me link specifically for "Ask the Dentist" queries.
 */
export const getDentistWhatsAppLink = (message: string = QUESTION_MESSAGE): string => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${DENTIST_WHATSAPP}?text=${encodedMessage}`;
};

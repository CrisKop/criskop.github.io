/**
 * Calcula la edad actual basada en una fecha de nacimiento
 * @param {string} birthDate - Fecha de nacimiento en formato 'DD/MM/YYYY'
 * @returns {number} - Edad actual en años
 */
export function calculateAge(birthDate) {
  const [day, month, year] = birthDate.split('/').map(Number);
  const birth = new Date(year, month - 1, day); // month - 1 porque los meses en JS van de 0-11
  const today = new Date();
  
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  
  // Si aún no ha pasado el cumpleaños este año, restar 1
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  
  return age;
}

/**
 * Obtiene la edad actual de Cristian Prince
 * @returns {number} - Edad actual
 */
export function getCristianAge() {
  return calculateAge('28/08/2006');
}
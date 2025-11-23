const headingElement = document.querySelector('.h2--advantages');
const originalText = 'квалифицированными специалистами, которые прошли наш строгий отбор';
const mobileText = 'квалифициро-ванными специалистами, которые прошли наш строгий отбор';
function updateHeadingText() {
    const mobileWidth = 350;

    if (window.innerWidth <= mobileWidth) {
      // Если экран достаточно узкий, устанавливаем короткий текст
      if (headingElement.textContent !== mobileText) {
         headingElement.textContent = mobileText;
      }
    } else {
      // Если экран широкий, возвращаем оригинальный текст
      if (headingElement.textContent !== originalText) {
        headingElement.textContent = originalText;
      }
    }
}
updateHeadingText();  
window.addEventListener('resize', updateHeadingText);
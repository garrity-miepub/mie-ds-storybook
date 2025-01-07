export const createAvatarHTML = ({ letter = 'A', image = null, size = 'medium' }) => {
    const avatarClass = `ds-avatar--${size}`;
  
    return `
      <div class="ds-avatar ${avatarClass}">
        ${image ? `<img src="${image}" alt="Avatar" />` : `<span>${letter}</span>`}
      </div>
    `;
  };
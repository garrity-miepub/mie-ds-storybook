export const createSkeletonHTML = ({
    classNames = '',
    width = null,
    height = null,
    rounded = true,
  }) => {
    const baseClasses = 'animate-pulse bg-gray-200';
    const roundedClass = rounded ? 'rounded-md' : '';
    const style = `width: ${width}; height: ${height};`;

    const className = `${baseClasses} ${roundedClass} ${classNames}`.trim();
    
  
    return `<div class="${className}" style="${style}">&nbsp;</div>`;
};
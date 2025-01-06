<!-- src/components/Card.svelte -->
<script>
    export let media = null;
    export let showMedia = true;
    export let primaryTitle = '';
    export let showPrimaryTitle = true;
    export let secondaryTitle = '';
    export let showSecondaryTitle = true;
    export let supportingText = '';
    export let showSupportingText = true;
    export let actions = null;
    export let showActions = true;
    export let leadingUtilityIcon = 'none'; // 'none', 'user', 'check', 'warning'
    export let utilityHeader = '';
    export let utilityContent = '';
    export let utilityIcons = []; // ['user', 'check', 'warning']
    export let showUtility = true;
  
    const iconMap = {
      user: '<i class="fa fa-user"></i>',
      check: '<i class="fa fa-check-circle"></i>',
      warning: '<i class="fa fa-exclamation-triangle"></i>',
    };
  
    $: hasContent = (showPrimaryTitle && primaryTitle) || (showSecondaryTitle && secondaryTitle) || (showSupportingText && supportingText);
</script>
  
<div class="ds-card">
{#if showMedia && media}
    <div class="media">
    {@html media}
    </div>
{/if}

{#if hasContent}
    <div class="content">
    {#if showPrimaryTitle && primaryTitle}
        <h3 class="primary-title">{primaryTitle}</h3>
    {/if}
    {#if showSecondaryTitle && secondaryTitle}
        <h4 class="secondary-title">{secondaryTitle}</h4>
    {/if}
    {#if showSupportingText && supportingText}
        <p class="supporting-text">{supportingText}</p>
    {/if}
    </div>
{/if}

{#if showUtility}
    <div class="utility">
    {#if leadingUtilityIcon !== 'none' && iconMap[leadingUtilityIcon]}
        <button type="button" class="button tertiary icon-only" aria-label={`Utility icon for ${leadingUtilityIcon}`}>
        <span class="icon">{@html iconMap[leadingUtilityIcon]}</span>
        </button>
    {/if}
    <div class="content">
        {#if utilityHeader}
        <div class="header">{utilityHeader}</div>
        {/if}
        {#if utilityContent}
        <div class="content-row">{utilityContent}</div>
        {/if}
    </div>
    <div class="trailing-icon-group">
        {#each utilityIcons as icon (icon)}
        {#if iconMap[icon]}
            <button type="button" class="button tertiary icon-only" aria-label={`Icon button for ${icon}`}>
            <span class="icon">{@html iconMap[icon]}</span>
            </button>
        {/if}
        {/each}
    </div>
    </div>
{/if}

{#if showActions && actions}
    <div class="actions">
    {@html actions}
    </div>
{/if}
</div>
<template>
  <component 
    :is="componentTag"
    :to="to"
    :href="href"
    :type="type"
    :disabled="disabled"
    :class="buttonClasses"
    v-bind="$attrs"
    @click="handleClick"
  >
    <slot name="icon-left" />
    <span v-if="$slots.default" class="button-text">
      <slot />
    </span>
    <slot name="icon-right" />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  // Variants from your existing designs
  variant?: 'default' | 'outline' | 'accent' | 'pill' | 'minimal'
  size?: 'small' | 'default' | 'large'
  
  // Layout options
  fullWidth?: boolean
  iconOnly?: boolean
  
  // Element type determination
  to?: string          // NuxtLink
  href?: string        // External link
  type?: 'button' | 'submit' | 'reset'
  
  // States
  disabled?: boolean
  loading?: boolean
  
  // Custom styling
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'default',
  type: 'button',
  fullWidth: false,
  iconOnly: false,
  disabled: false,
  loading: false
})

const emit = defineEmits<{
  click: [event: Event]
}>()

// Auto-determine component type
const componentTag = computed(() => {
  if (props.to) return 'NuxtLink'
  if (props.href) return 'a'
  return 'button'
})

// Generate all button classes
const buttonClasses = computed(() => {
  const classes = ['neo-button']
  
  // Add variant
  if (props.variant !== 'default') {
    classes.push(props.variant)
  }
  
  // Add size
  if (props.size !== 'default') {
    classes.push(props.size)
  }
  
  // Add modifiers
  if (props.fullWidth) classes.push('full-width')
  if (props.iconOnly) classes.push('icon-only')
  if (props.loading) classes.push('loading')
  
  // Add custom class
  if (props.class) classes.push(props.class)
  
  return classes.join(' ')
})

const handleClick = (event: Event) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}
</script>

<style scoped>
/* Base Neo Button - Default neomorphic style */
.neo-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  font-weight: 600;
  font-size: 1rem;
  color: var(--neo-text-color);
  background-color: var(--neo-bg-color);
  border-radius: 0.8rem;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  /* Default neomorphic shadow */
  box-shadow: 
    8px 8px 16px var(--neo-shadow-dark), 
    -8px -8px 16px var(--neo-shadow-light);
}

.neo-button:hover:not(:disabled):not(.loading) {
  transform: translateY(-3px);
  box-shadow: 
    10px 10px 20px var(--neo-shadow-dark), 
    -10px -10px 20px var(--neo-shadow-light);
}

.neo-button:active:not(:disabled):not(.loading) {
  transform: translateY(0);
  box-shadow: 
    inset 5px 5px 10px var(--neo-shadow-dark), 
    inset -5px -5px 10px var(--neo-shadow-light);
}

.neo-button:focus {
  outline: none;
  box-shadow: 
    8px 8px 16px var(--neo-shadow-dark), 
    -8px -8px 16px var(--neo-shadow-light),
    0 0 0 3px rgba(0, 188, 204, 0.3);
}

/* Outline Variant - Your existing outline style */
.neo-button.outline {
  background-color: transparent;
  box-shadow: none;
  border: 2px solid var(--neo-shadow-dark);
}

.neo-button.outline:hover:not(:disabled) {
  background-color: var(--neo-bg-color);
  box-shadow: 
    5px 5px 10px var(--neo-shadow-dark), 
    -5px -5px 10px var(--neo-shadow-light);
}

/* NEW - Accent Variant with neo accent color background */
.neo-button.accent {
  color: white;
  background-color: var(--neo-accent-color);
  box-shadow: 
    8px 8px 16px rgba(0, 188, 204, 0.3), 
    -8px -8px 16px rgba(255, 255, 255, 0.8),
    inset 2px 2px 4px rgba(255, 255, 255, 0.3),
    inset -2px -2px 4px rgba(0, 188, 204, 0.2);
}

.neo-button.accent:hover:not(:disabled) {
  background-color: #00a8cc;
  transform: translateY(-3px);
  box-shadow: 
    12px 12px 24px rgba(0, 188, 204, 0.4), 
    -12px -12px 24px rgba(255, 255, 255, 0.9),
    inset 3px 3px 6px rgba(255, 255, 255, 0.4),
    inset -3px -3px 6px rgba(0, 168, 204, 0.3);
}

.neo-button.accent:active:not(:disabled) {
  transform: translateY(-1px);
  background-color: #0099b8;
  box-shadow: 
    inset 8px 8px 16px rgba(0, 168, 204, 0.4), 
    inset -8px -8px 16px rgba(0, 220, 255, 0.2),
    4px 4px 8px rgba(0, 188, 204, 0.2);
}

/* Pill Variant - Rounded pill shape */
.neo-button.pill {
  border-radius: 2rem;
  padding: 0.6rem 1.5rem;
}

/* Minimal Variant - Subtle, flat style */
.neo-button.minimal {
  background-color: var(--neo-bg-color);
  box-shadow: 
    4px 4px 8px var(--neo-shadow-dark), 
    -4px -4px 8px var(--neo-shadow-light);
}

.neo-button.minimal:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 
    6px 6px 12px var(--neo-shadow-dark), 
    -6px -6px 12px var(--neo-shadow-light);
}

/* Size Variants */
.neo-button.small {
  padding: 0.6rem 1.2rem;
  font-size: 0.9rem;
}

.neo-button.large {
  padding: 1rem 2rem;
  font-size: 1.1rem;
}

/* Layout Modifiers */
.neo-button.full-width {
  width: 100%;
}

.neo-button.icon-only {
  padding: 0.8rem;
  min-width: 3rem;
  min-height: 3rem;
}

.neo-button.icon-only.small {
  padding: 0.6rem;
  min-width: 2.5rem;
  min-height: 2.5rem;
}

.neo-button.icon-only.large {
  padding: 1rem;
  min-width: 3.5rem;
  min-height: 3.5rem;
}

/* States */
.neo-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none !important;
  background-color: #ccc;
  color: #888;
  box-shadow: 
    4px 4px 8px rgba(0, 0, 0, 0.1), 
    -4px -4px 8px rgba(255, 255, 255, 0.3) !important;
}

.neo-button.accent:disabled {
  background-color: #ccc;
  color: #888;
}

/* Loading State */
.neo-button.loading {
  cursor: wait;
  position: relative;
}

.neo-button.loading .button-text {
  opacity: 0.5;
}

.neo-button.loading::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1rem;
  height: 1rem;
  margin: -0.5rem 0 0 -0.5rem;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: button-spin 1s linear infinite;
}

@keyframes button-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Download button specific (for CV download) */
.neo-button .download-icon {
  font-size: 1.2rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .neo-button {
    padding: 0.7rem 1.3rem;
    font-size: 0.95rem;
  }
  
  .neo-button.small {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
  }
  
  .neo-button.large {
    padding: 0.9rem 1.8rem;
    font-size: 1.05rem;
  }
}

@media (max-width: 480px) {
  .neo-button.full-width {
    padding: 0.8rem 1rem;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .neo-button {
    border: 2px solid var(--neo-text-color);
  }
  
  .neo-button.accent {
    border: 2px solid var(--neo-accent-color);
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .neo-button {
    transition: none;
  }
  
  .neo-button:hover {
    transform: none;
  }
  
  .button-spin {
    animation: none;
  }
}
</style>
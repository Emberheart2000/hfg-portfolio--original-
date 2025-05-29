<template>
  <component 
    :is="tag"
    :to="to"
    :href="href"
    :type="type"
    :disabled="disabled"
    :class="buttonClasses"
    v-bind="$attrs"
    @click="handleClick"
  >
    <slot name="icon-left" />
    <slot />
    <slot name="icon-right" />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  // Variants
  variant?: 'default' | 'outline' | 'accent' | 'accent-subtle' | 'accent-gradient'
  size?: 'small' | 'default' | 'large'
  
  // Layout
  fullWidth?: boolean
  iconOnly?: boolean
  
  // Element type
  tag?: 'button' | 'NuxtLink' | 'a'
  to?: string
  href?: string
  type?: 'button' | 'submit' | 'reset'
  
  // States
  disabled?: boolean
  
  // Additional classes
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'default',
  tag: 'button',
  type: 'button',
  fullWidth: false,
  iconOnly: false,
  disabled: false
})

const emit = defineEmits<{
  click: [event: Event]
}>()

// Determine the component tag
const tag = computed(() => {
  if (props.to) return 'NuxtLink'
  if (props.href) return 'a'
  return props.tag
})

// Generate button classes
const buttonClasses = computed(() => {
  const classes = ['neo-button']
  
  // Variant
  if (props.variant !== 'default') {
    classes.push(props.variant)
  }
  
  // Size
  if (props.size !== 'default') {
    classes.push(props.size)
  }
  
  // Layout modifiers
  if (props.fullWidth) classes.push('full-width')
  if (props.iconOnly) classes.push('icon-only')
  
  // Custom classes
  if (props.class) classes.push(props.class)
  
  return classes.join(' ')
})

const handleClick = (event: Event) => {
  if (!props.disabled) {
    emit('click', event)
  }
}
</script>

<style scoped>
/* Base Neo Button Styles */
.neo-button {
  display: inline-block;
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
  box-shadow: 
    8px 8px 16px var(--neo-shadow-dark), 
    -8px -8px 16px var(--neo-shadow-light);
}

.neo-button:hover {
  transform: translateY(-3px);
  box-shadow: 
    10px 10px 20px var(--neo-shadow-dark), 
    -10px -10px 20px var(--neo-shadow-light);
}

.neo-button:active {
  transform: translateY(0);
  box-shadow: 
    inset 5px 5px 10px var(--neo-shadow-dark), 
    inset -5px -5px 10px var(--neo-shadow-light);
}

/* Outline Variant */
.neo-button.outline {
  background-color: transparent;
  box-shadow: none;
  border: 2px solid var(--neo-shadow-dark);
}

.neo-button.outline:hover {
  background-color: var(--neo-bg-color);
  box-shadow: 
    5px 5px 10px var(--neo-shadow-dark), 
    -5px -5px 10px var(--neo-shadow-light);
}

/* Accent Variants */
.neo-button.accent {
  color: white;
  background-color: var(--neo-accent-color);
  box-shadow: 
    8px 8px 16px rgba(0, 188, 204, 0.3), 
    -8px -8px 16px rgba(255, 255, 255, 0.8),
    inset 2px 2px 4px rgba(255, 255, 255, 0.3),
    inset -2px -2px 4px rgba(0, 188, 204, 0.2);
}

.neo-button.accent:hover {
  background-color: #00a8cc;
  box-shadow: 
    12px 12px 24px rgba(0, 188, 204, 0.4), 
    -12px -12px 24px rgba(255, 255, 255, 0.9),
    inset 3px 3px 6px rgba(255, 255, 255, 0.4),
    inset -3px -3px 6px rgba(0, 168, 204, 0.3);
}

.neo-button.accent:active {
  background-color: #0099b8;
  box-shadow: 
    inset 8px 8px 16px rgba(0, 168, 204, 0.4), 
    inset -8px -8px 16px rgba(0, 220, 255, 0.2),
    4px 4px 8px rgba(0, 188, 204, 0.2);
}

.neo-button.accent-subtle {
  color: white;
  background-color: var(--neo-accent-color);
  box-shadow: 
    4px 4px 8px rgba(0, 188, 204, 0.25), 
    -4px -4px 8px rgba(255, 255, 255, 0.6),
    inset 1px 1px 2px rgba(255, 255, 255, 0.3);
}

.neo-button.accent-subtle:hover {
  background-color: #00a8cc;
  box-shadow: 
    6px 6px 12px rgba(0, 188, 204, 0.3), 
    -6px -6px 12px rgba(255, 255, 255, 0.7),
    inset 2px 2px 4px rgba(255, 255, 255, 0.4);
}

.neo-button.accent-gradient {
  color: white;
  background: linear-gradient(135deg, var(--neo-accent-color), #00a8cc);
  box-shadow: 
    8px 8px 16px rgba(0, 188, 204, 0.3), 
    -8px -8px 16px rgba(255, 255, 255, 0.8),
    inset 2px 2px 4px rgba(255, 255, 255, 0.2);
}

.neo-button.accent-gradient:hover {
  background: linear-gradient(135deg, #00a8cc, #0099b8);
  box-shadow: 
    12px 12px 24px rgba(0, 188, 204, 0.4), 
    -12px -12px 24px rgba(255, 255, 255, 0.9),
    inset 3px 3px 6px rgba(255, 255, 255, 0.3);
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

/* Layout Variants */
.neo-button.full-width {
  width: 100%;
  text-align: center;
}

.neo-button.icon-only {
  padding: 0.8rem;
  min-width: 3rem;
  min-height: 3rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

/* Disabled State */
.neo-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
  background-color: #ccc;
  box-shadow: 
    4px 4px 8px rgba(0, 0, 0, 0.1), 
    -4px -4px 8px rgba(255, 255, 255, 0.3);
}

.neo-button:disabled:hover {
  transform: none;
  background-color: #ccc;
}

/* Focus States */
.neo-button:focus {
  outline: none;
  box-shadow: 
    8px 8px 16px var(--neo-shadow-dark), 
    -8px -8px 16px var(--neo-shadow-light),
    0 0 0 3px rgba(0, 188, 204, 0.3);
}

/* Responsive */
@media (max-width: 768px) {
  .neo-button {
    padding: 0.7rem 1.3rem;
    font-size: 0.95rem;
  }
  
  .neo-button.small {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
  }
}
</style>
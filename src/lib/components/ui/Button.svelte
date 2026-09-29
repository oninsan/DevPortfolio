<script>
	export let variant = 'default';
	export let size = 'default';
	export let disabled = false;
	/** @type {'button' | 'submit' | 'reset'} */
	export let type = 'button';
	export let className = '';

	$: classes = [
		'inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
		// Variants
		variant === 'default' && 'bg-primary text-primary-foreground hover:bg-primary/90',
		variant === 'outline' &&
			'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
		variant === 'ghost' && 'hover:bg-accent hover:text-accent-foreground',
		// Sizes
		size === 'default' && 'h-10 px-4 py-2',
		size === 'sm' && 'h-9 rounded-md px-3',
		size === 'lg' && 'h-11 rounded-md px-8',
		className
	]
		.filter(Boolean)
		.join(' ');
</script>

<button {type} {disabled} class={classes} on:click {...$$restProps}>
	<slot />
</button>

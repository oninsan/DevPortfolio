<script lang="ts">
	import { onDestroy } from 'svelte';
	import { Volume2, VolumeX } from 'lucide-svelte';

	let enabled = $state(false);
	let audio: AudioContext | null = null;
	let timer: ReturnType<typeof setTimeout> | undefined;
	let noteIndex = 0;
	const notes = [220, 261.63, 329.63, 392, 329.63, 261.63];

	function playNote(frequency: number, length = 1.3, volume = 0.012) {
		if (!audio || audio.state !== 'running') return;
		const now = audio.currentTime;
		const envelope = audio.createGain();
		envelope.gain.setValueAtTime(0.0001, now);
		envelope.gain.exponentialRampToValueAtTime(volume, now + 0.08);
		envelope.gain.exponentialRampToValueAtTime(0.0001, now + length);
		envelope.connect(audio.destination);
		for (const detune of [-3, 3]) {
			const oscillator = audio.createOscillator();
			oscillator.type = 'sine';
			oscillator.frequency.value = frequency;
			oscillator.detune.value = detune;
			oscillator.connect(envelope);
			oscillator.start(now);
			oscillator.stop(now + length + 0.02);
		}
	}

	function schedule() {
		if (!enabled || !audio) return;
		playNote(notes[noteIndex++ % notes.length], 2.1, 0.008);
		timer = setTimeout(schedule, 3400);
	}

	function stop() {
		enabled = false;
		clearTimeout(timer);
		const closing = audio;
		audio = null;
		void closing?.close();
	}

	async function toggle() {
		if (enabled) return stop();
		try {
			audio = new AudioContext();
			await audio.resume();
			enabled = true;
			noteIndex = 0;
			schedule();
		} catch {
			stop();
		}
	}

	function accent() {
		if (enabled) playNote(523.25, 0.28, 0.006);
	}

	if (typeof window !== 'undefined') {
		window.addEventListener('portfolio:accent', accent);
	}
	onDestroy(() => {
		if (typeof window !== 'undefined') window.removeEventListener('portfolio:accent', accent);
		stop();
	});
</script>

<button
	class:playing={enabled}
	class="sound-toggle"
	type="button"
	onclick={toggle}
	aria-label={enabled ? 'Turn off ambient sound' : 'Turn on ambient sound'}
	aria-pressed={enabled}
	title={enabled ? 'Turn off ambient sound' : 'Turn on ambient sound'}
>
	{#if enabled}<Volume2 size={16} />{:else}<VolumeX size={16} />{/if}
	<span>Sound {enabled ? 'on' : 'off'}</span>
	<span class="sound-bars" aria-hidden="true"><i></i><i></i><i></i></span>
</button>

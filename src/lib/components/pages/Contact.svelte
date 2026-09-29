<script lang="ts">
	import { Mail, Github, Linkedin, Copy, Check } from 'lucide-svelte';
	import { onDestroy } from 'svelte';
	const email = 'kokoybaldofordawin@gmail.com';
	let copied = $state(false);
	let copyMessage = $state('');
	let copyTimer: ReturnType<typeof setTimeout>;
	let name = $state('');
	let senderEmail = $state('');
	let subject = $state('');
	let message = $state('');
	let draftOpened = $state(false);
	async function copyEmail() {
		try {
			await navigator.clipboard.writeText(email);
			copied = true;
			copyMessage = 'Email address copied.';
			clearTimeout(copyTimer);
			copyTimer = setTimeout(() => {
				copied = false;
				copyMessage = '';
			}, 3000);
		} catch {
			copyMessage = 'You can select and copy the email address above.';
		}
	}
	function openDraft(event: SubmitEvent) {
		event.preventDefault();
		const body = `Hi Niño,\n\n${message}\n\nFrom: ${name}\nEmail: ${senderEmail}`;
		window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
		draftOpened = true;
	}
	onDestroy(() => clearTimeout(copyTimer));
</script>

<section id="contact" class="contact-section" aria-labelledby="contact-title">
	<div class="shell section">
		<div class="section-kicker">
			<span class="mono">04 / SAY HELLO</span><span class="rule"></span>
		</div>
		<div class="contact-grid">
			<div class="contact-copy">
				<h2 id="contact-title">
					Have something<br />in mind?<br /><span class="accent">Let’s build it.</span>
				</h2>
				<p>A project, an opportunity, or a good idea.<br />I’d love to hear about it.</p>
				<div class="email-line">
					<a href={`mailto:${email}`}>{email}</a><button
						onclick={copyEmail}
						aria-label={copied ? 'Email copied' : 'Copy email address'}
						>{#if copied}<Check size={18} />{:else}<Copy size={18} />{/if}</button
					>
				</div>
				<p class="copy-status" role="status">{copyMessage}</p>
				<div class="contact-socials">
					<a href="https://github.com/oninsan" target="_blank" rel="noreferrer"
						><Github size={18} /> GitHub</a
					><a
						href="https://www.linkedin.com/in/ni%C3%B1o-abao-415124185/"
						target="_blank"
						rel="noreferrer"><Linkedin size={18} /> LinkedIn</a
					>
				</div>
			</div>
			<form class="contact-form" onsubmit={openDraft}>
				<h3>Start a conversation</h3>
				<p>Write a note here, then send it from your email app.</p>
				<div class="form-row">
					<div>
						<label for="contact-name">Your name</label><input
							id="contact-name"
							name="name"
							bind:value={name}
							autocomplete="name"
							placeholder="How should I call you?"
							required
							maxlength="150"
						/>
					</div>
					<div>
						<label for="contact-email">Email address</label><input
							id="contact-email"
							name="email"
							type="email"
							bind:value={senderEmail}
							autocomplete="email"
							placeholder="you@example.com"
							required
							maxlength="254"
						/>
					</div>
				</div>
				<label for="contact-subject">Subject</label><input
					id="contact-subject"
					name="subject"
					bind:value={subject}
					placeholder="What are you thinking about?"
					required
					maxlength="200"
				/>
				<label for="contact-message">Your message</label><textarea
					id="contact-message"
					name="message"
					bind:value={message}
					placeholder="Tell me a little about your idea…"
					rows="5"
					required
					maxlength="4000"
				></textarea>
				<button class="button button-primary" type="submit"
					><Mail size={18} /> Open email draft</button
				>
				<p class="form-note" role="status">
					{draftOpened
						? 'Your email app was requested. Send the draft there to reach me. If it didn’t open, use the email link beside this form.'
						: 'This opens your email app. Your message is sent when you send the draft.'}
				</p>
			</form>
		</div>
	</div>
</section>

<script lang="ts">
  let _class: string = "";
  let style: string = "";
</script>

<div class="skeleton-box {_class}" style={style} {...$$restProps}></div>

<style>
  .skeleton-box {
    position: relative;
    overflow: hidden;
    background-color: #e0e0e0;
    display: block; /* ensures pseudo-element is visible */
  }

  .skeleton-box::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.4),
      transparent
    );
    transform: translateX(-100%);
    animation: shimmer 1.5s infinite;
  }

  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
</style>

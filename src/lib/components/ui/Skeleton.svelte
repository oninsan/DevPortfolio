<div class="skeleton-box"></div>

<style>
  .skeleton-box {
    position: relative;
    overflow: hidden;
    background-color: rgba(255, 255, 255, 0.2); 
  }

  /* The Shimmer Effect */
  .skeleton-box::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3), /* A slightly brighter white for the shimmer */
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
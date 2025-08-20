// JavaScript for Realisation Card Slider
class RealisationSlider {
  constructor() {
    this.currentCard = 0
    this.cards = []
    this.totalCards = 0
    this.container = null
    this.init()
  }

  init() {
    // Wait for DOM to be ready
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => this.setup())
    } else {
      this.setup()
    }
  }

  setup() {
    this.container = document.querySelector(".realisation-cards")
    this.cards = document.querySelectorAll(".realisation-cards .div")
    this.totalCards = this.cards.length

    if (this.totalCards <= 1) return

    this.createNavigation()
    this.bindEvents()
    this.showCard(0)
  }

  createNavigation() {
    // Create navigation container
    const navContainer = document.createElement("div")
    navContainer.className = "nav-dots"

    // Create dots
    for (let i = 0; i < this.totalCards; i++) {
      const dot = document.createElement("div")
      dot.className = "nav-dot"
      if (i === 0) dot.classList.add("active")
      dot.addEventListener("click", () => this.goToCard(i))
      navContainer.appendChild(dot)
    }

    // Create arrows
    const prevArrow = document.createElement("button")
    prevArrow.className = "nav-arrow prev"
    prevArrow.innerHTML = "‹"
    prevArrow.addEventListener("click", () => this.previousCard())

    const nextArrow = document.createElement("button")
    nextArrow.className = "nav-arrow next"
    nextArrow.innerHTML = "›"
    nextArrow.addEventListener("click", () => this.nextCard())

    // Add to realisation container
    const realisationContainer = document.querySelector(".realisation")
    realisationContainer.appendChild(navContainer)
    realisationContainer.appendChild(prevArrow)
    realisationContainer.appendChild(nextArrow)
  }

  bindEvents() {
    // Keyboard navigation
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") this.previousCard()
      if (e.key === "ArrowRight") this.nextCard()
    })

    // Touch/swipe support
    let startX = 0
    let endX = 0

    this.container.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX
    })

    this.container.addEventListener("touchend", (e) => {
      endX = e.changedTouches[0].clientX
      const diff = startX - endX

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          this.nextCard()
        } else {
          this.previousCard()
        }
      }
    })
  }

  showCard(index) {
    // Hide all cards
    this.cards.forEach((card) => {
      card.classList.remove("active")
      card.style.display = "none"
    })

    // Show current card
    this.cards[index].style.display = "flex"
    this.cards[index].classList.add("active")

    // Update navigation dots
    document.querySelectorAll(".nav-dot").forEach((dot, i) => {
      dot.classList.toggle("active", i === index)
    })
  }

  goToCard(index) {
    this.currentCard = index
    this.showCard(index)
  }

  nextCard() {
    this.currentCard = (this.currentCard + 1) % this.totalCards
    this.showCard(this.currentCard)
  }

  previousCard() {
    this.currentCard = (this.currentCard - 1 + this.totalCards) % this.totalCards
    this.showCard(this.currentCard)
  }

  // Auto-play functionality
  startAutoPlay(interval = 5000) {
    setInterval(() => {
      this.nextCard()
    }, interval)
  }
}

// Initialize the slider
new RealisationSlider()

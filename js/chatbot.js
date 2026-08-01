(function () {

  /* ── FAQ KNOWLEDGE BASE ── */
  const FAQ = [
    {
      patterns: ['hello', 'hi', 'hey', 'howzit', 'good day', 'greetings'],
      answer: "Hey there! 👋 Welcome to FourHorseMen Technologies. I'm here to answer your questions. What can I help you with today?",
      suggestions: ['What services do you offer?', 'Where are you located?', 'How do I contact you?']
    },
    {
      patterns: ['service', 'offer', 'what do you do', 'what can you do', 'help me with'],
      answer: "We offer four core services:\n\n1. 💻 <b>Software Development</b> — custom web apps, business systems & automation\n2. 🔧 <b>IT & Network Support</b> — maintenance, repairs & technical consulting\n3. 🌐 <b>Internet Café & Digital Access</b> — internet, printing, scanning & online application help\n4. ♻️ <b>E-Waste Collection & Refurbishment</b> — secure collection, data erasure & student redistribution\n\nWould you like to know more about any of these?",
      suggestions: ['Software Development', 'IT Support', 'Internet Café', 'E-Waste']
    },
    {
      patterns: ['software', 'app', 'application', 'website', 'web', 'develop', 'build', 'system', 'automation', 'platform'],
      answer: "Our <b>Software Development</b> service covers:\n\n• Custom web applications & business websites\n• Business management systems (ERP, CRM, inventory)\n• Automation solutions to eliminate manual tasks\n• Digital platforms — e-commerce, booking systems & portals\n\nEvery solution is tailored to your specific business needs. We handle everything from discovery to deployment and ongoing support.",
      suggestions: ['How much does it cost?', 'How long does a project take?', 'Get a quote']
    },
    {
      patterns: ['it support', 'network', 'repair', 'maintenance', 'troubleshoot', 'technical', 'computer fix', 'laptop', 'hardware', 'install'],
      answer: "Our <b>IT & Network Support</b> service includes:\n\n• Computer maintenance & repairs\n• LAN/WAN network setup & management\n• System troubleshooting & virus removal\n• Hardware & software installation\n• Technical consulting & IT strategy\n• Ongoing IT support for businesses of any size",
      suggestions: ['How do I book IT support?', 'Where are you located?', 'Get a quote']
    },
    {
      patterns: ['internet cafe', 'internet café', 'cafe', 'print', 'scan', 'browse', 'digital access', 'nsfas', 'application help', 'copy'],
      answer: "Our <b>Internet Café & Digital Access</b> services include:\n\n• Fast, affordable internet access\n• Printing (black & white and colour)\n• Scanning & photocopying\n• Online application assistance (NSFAS, university, jobs)\n• Document services & CV printing\n• Basic computer training & digital literacy support\n\nWe're based in Johannesburg — walk-ins welcome!",
      suggestions: ['Where are you located?', 'What are your hours?', 'How much does printing cost?']
    },
    {
      patterns: ['ewaste', 'e-waste', 'e waste', 'recycle', 'refurbish', 'collect', 'collection', 'donate', 'laptop donation', 'old computer', 'device'],
      answer: "Our <b>E-Waste Collection & Refurbishment</b> programme:\n\n• We collect desktops, laptops, servers, monitors & networking gear\n• Secure data erasure with certificates of destruction\n• Full technical assessment & grading\n• Refurbishment — SSD upgrades, repairs & software installation\n• Devices matched to students based on their study needs\n\nNo minimum volume required. We collect directly from your premises.",
      suggestions: ['How do I book a collection?', 'What devices do you accept?', 'Data security']
    },
    {
      patterns: ['book', 'schedule', 'arrange', 'pickup', 'pick up', 'collection booking'],
      answer: "To book an e-waste collection:\n\n1. Fill in our contact form on the homepage\n2. Or email us at <b>fourhorsementech@gmail.com</b>\n3. Or call us at <b>071 970 0746</b>\n\nWe'll arrange a collection schedule that fits your organisation's refresh cycle — whether it's 10 devices or 1 000.",
      suggestions: ['What devices do you accept?', 'Is data erasure included?', 'Where are you located?']
    },
    {
      patterns: ['data', 'secure', 'security', 'erasure', 'wipe', 'certificate', 'privacy', 'confidential'],
      answer: "Data security is our top priority. Every device we collect undergoes <b>industry-recognised data destruction</b> before any other work begins.\n\n• Certificates of destruction are available on request\n• Compliant with data protection best practices\n• Supports your organisation's ESG & CSR reporting requirements\n\nYour data never leaves the erasure process intact.",
      suggestions: ['Book a collection', 'What devices do you accept?', 'Get a quote']
    },
    {
      patterns: ['accept', 'what devices', 'which devices', 'types of device', 'monitor', 'server', 'desktop'],
      answer: "We accept a wide range of IT equipment:\n\n✅ Laptops & desktops\n✅ Servers & workstations\n✅ Monitors & displays\n✅ Networking gear (routers, switches, access points)\n✅ Keyboards, mice & accessories\n✅ Printers & peripherals\n\nNo minimum volume — we'll collect whatever you have.",
      suggestions: ['Book a collection', 'Is data erasure included?', 'How long does it take?']
    },
    {
      patterns: ['cost', 'price', 'pricing', 'how much', 'rate', 'fee', 'charge', 'quote'],
      answer: "Our pricing depends on the scope of your project or service. We offer:\n\n• <b>Free initial consultation</b> for all services\n• <b>Transparent, tailored quotes</b> — no hidden fees\n• Competitive rates designed for South African businesses & communities\n\nThe best way to get a price is to send us a project brief via our quote form or email us directly.",
      suggestions: ['Get a quote', 'Contact us', 'What services do you offer?']
    },
    {
      patterns: ['how long', 'timeline', 'turnaround', 'duration', 'time', 'deadline'],
      answer: "Timelines vary by project:\n\n• <b>IT Support & Repairs</b> — same day to 3 business days\n• <b>Simple websites</b> — 2 to 4 weeks\n• <b>Custom applications</b> — 4 to 12 weeks depending on complexity\n• <b>E-Waste collection</b> — scheduled around your refresh cycle\n\nWe'll give you a clear timeline during your free consultation.",
      suggestions: ['Get a quote', 'Contact us', 'What services do you offer?']
    },
    {
      patterns: ['location', 'where', 'address', 'find you', 'based', 'johannesburg', 'joburg'],
      answer: "We're based in <b>Johannesburg, South Africa</b>. 📍\n\nOur internet café is open for walk-ins. For IT support, software projects, and e-waste collections, we also come to you.",
      suggestions: ['What are your hours?', 'How do I contact you?', 'Book a collection']
    },
    {
      patterns: ['hours', 'open', 'operating', 'when', 'time', 'working hours'],
      answer: "Our general operating hours are:\n\n🕗 <b>Monday – Friday:</b> 08:00 – 17:00\n🕗 <b>Saturday:</b> 09:00 – 13:00\n🚫 <b>Sunday:</b> Closed\n\nFor urgent IT support, reach us via email and we'll get back to you as soon as possible.",
      suggestions: ['Where are you located?', 'How do I contact you?']
    },
    {
      patterns: ['contact', 'email', 'phone', 'call', 'reach', 'get in touch', 'whatsapp'],
      answer: "You can reach us through:\n\n📧 <b>Email:</b> fourhorsementech@gmail.com\n📞 <b>Phone:</b> 071 970 0746\n📍 <b>Location:</b> Johannesburg, South Africa\n\nOr fill in the contact form on our homepage and we'll get back to you promptly.",
      suggestions: ['Get a quote', 'Book a collection', 'What services do you offer?']
    },
    {
      patterns: ['who', 'founder', 'team', 'ceo', 'cto', 'cfo', 'coo', 'partner', 'behind'],
      answer: "FourHorseMen Technologies was founded by four Walter Sisulu University graduates:\n\n👤 <b>Masibulele Madikizela</b> — CEO\n👤 <b>Mosuli Ntiyane</b> — COO\n👤 <b>Amila Mathumba</b> — CTO\n👤 <b>Zubenathi Lande</b> — CFO\n\nUnited by a shared vision to deliver innovative, affordable technology solutions that create meaningful impact.",
      suggestions: ['What services do you offer?', 'Where are you located?', 'Contact us']
    },
    {
      patterns: ['about', 'company', 'wsu', 'walter sisulu', 'startup', 'history', 'story'],
      answer: "FourHorseMen Technologies (Pty) Ltd is a South African technology startup founded by graduates of <b>Walter Sisulu University</b>.\n\nWe specialise in digital transformation services — software development, IT support, digital access, and sustainable e-waste management — empowering individuals, businesses, and communities to thrive in the digital world.",
      suggestions: ['What services do you offer?', 'Meet the team', 'Contact us']
    },
    {
      patterns: ['esg', 'csr', 'sustainability', 'environment', 'green', 'impact', 'community'],
      answer: "Sustainability is at the heart of what we do:\n\n🌱 <b>Environment</b> — we divert e-waste from landfill and reduce demand for new raw materials\n📚 <b>Education</b> — refurbished devices go to students who need them most\n📋 <b>Compliance</b> — our secure disposal process supports your ESG & CSR reporting\n\nEvery device collected does two jobs — for the planet and for a student.",
      suggestions: ['Book a collection', 'Learn about E-Waste', 'Contact us']
    },
    {
      patterns: ['thank', 'thanks', 'appreciate', 'helpful', 'great', 'awesome', 'perfect'],
      answer: "You're welcome! 😊 Is there anything else I can help you with?",
      suggestions: ['What services do you offer?', 'Get a quote', 'Contact us']
    },
    {
      patterns: ['bye', 'goodbye', 'see you', 'later', 'done', 'that\'s all'],
      answer: "Thanks for chatting with us! 👋 Feel free to come back anytime. Have a great day!",
      suggestions: ['Contact us', 'Get a quote']
    }
  ];

  const FALLBACK = {
    answer: "I'm not sure about that one, but our team will know! You can reach us at <b>fourhorsementech@gmail.com</b> or call <b>071 970 0746</b>. Is there something else I can help with?",
    suggestions: ['What services do you offer?', 'Where are you located?', 'Contact us']
  };

  /* ── INJECT WIDGET HTML ── */
  document.body.insertAdjacentHTML('beforeend', `
    <button class="chat-trigger" id="chatTrigger" aria-label="Open chat">
      <svg class="chat-icon-open" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
      <svg class="chat-icon-close" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      <span class="chat-badge" id="chatBadge">1</span>
    </button>

    <div class="chat-window" id="chatWindow" aria-hidden="true" role="dialog" aria-label="FourHorseMen chat">
      <div class="chat-header">
        <div class="chat-header-info">
          <div class="chat-avatar">4H</div>
          <div>
            <div class="chat-name">FourHorseMen Support</div>
            <div class="chat-status"><span class="status-dot"></span>Online</div>
          </div>
        </div>
        <button class="chat-close" id="chatClose" aria-label="Close chat">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>
      <div class="chat-messages" id="chatMessages"></div>
      <div class="chat-suggestions" id="chatSuggestions"></div>
      <div class="chat-input-row">
        <input type="text" id="chatInput" class="chat-input" placeholder="Ask a question…" autocomplete="off" maxlength="200">
        <button class="chat-send" id="chatSend" aria-label="Send">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
        </button>
      </div>
    </div>
  `);

  /* ── ELEMENTS ── */
  const trigger    = document.getElementById('chatTrigger');
  const window_    = document.getElementById('chatWindow');
  const closeBtn   = document.getElementById('chatClose');
  const messages   = document.getElementById('chatMessages');
  const input      = document.getElementById('chatInput');
  const sendBtn    = document.getElementById('chatSend');
  const suggestBox = document.getElementById('chatSuggestions');
  const badge      = document.getElementById('chatBadge');
  let isOpen = false;

  /* ── OPEN / CLOSE ── */
  function openChat() {
    isOpen = true;
    window_.classList.add('open');
    window_.setAttribute('aria-hidden', 'false');
    trigger.classList.add('active');
    badge.style.display = 'none';
    input.focus();
    if (messages.children.length === 0) greet();
  }
  function closeChat() {
    isOpen = false;
    window_.classList.remove('open');
    window_.setAttribute('aria-hidden', 'true');
    trigger.classList.remove('active');
  }
  trigger.addEventListener('click', () => isOpen ? closeChat() : openChat());
  closeBtn.addEventListener('click', closeChat);

  /* ── MESSAGES ── */
  function addMessage(text, from) {
    const div = document.createElement('div');
    div.className = `chat-msg chat-msg--${from}`;
    div.innerHTML = `<div class="chat-bubble">${text}</div>`;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  }

  function showTyping() {
    const div = document.createElement('div');
    div.className = 'chat-msg chat-msg--bot typing-indicator';
    div.id = 'typingIndicator';
    div.innerHTML = `<div class="chat-bubble"><span></span><span></span><span></span></div>`;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  }
  function hideTyping() {
    const el = document.getElementById('typingIndicator');
    if (el) el.remove();
  }

  function setSuggestions(list) {
    suggestBox.innerHTML = '';
    if (!list || !list.length) return;
    list.forEach(s => {
      const btn = document.createElement('button');
      btn.className = 'suggestion-chip';
      btn.textContent = s;
      btn.addEventListener('click', () => handleUserInput(s));
      suggestBox.appendChild(btn);
    });
  }

  /* ── MATCHING ── */
  function findAnswer(text) {
    const lower = text.toLowerCase().trim();
    for (const faq of FAQ) {
      if (faq.patterns.some(p => lower.includes(p))) return faq;
    }
    return FALLBACK;
  }

  /* ── HANDLE INPUT ── */
  function handleUserInput(text) {
    if (!text.trim()) return;
    addMessage(text, 'user');
    input.value = '';
    suggestBox.innerHTML = '';
    showTyping();
    setTimeout(() => {
      hideTyping();
      const result = findAnswer(text);
      addMessage(result.answer, 'bot');
      setSuggestions(result.suggestions);
    }, 800 + Math.random() * 400);
  }

  sendBtn.addEventListener('click', () => handleUserInput(input.value));
  input.addEventListener('keydown', e => { if (e.key === 'Enter') handleUserInput(input.value); });

  /* ── GREETING ── */
  function greet() {
    setTimeout(() => {
      addMessage("👋 Hi! I'm the FourHorseMen virtual assistant. I can answer questions about our services, team, location, pricing, and more.<br><br>What would you like to know?", 'bot');
      setSuggestions(['What services do you offer?', 'Where are you located?', 'How do I contact you?']);
    }, 300);
  }

  /* ── SHOW BADGE AFTER DELAY ── */
  setTimeout(() => {
    if (!isOpen) badge.style.display = 'flex';
  }, 4000);

})();

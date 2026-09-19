// ── Diccionario en inglés de la portada ──
// El español NO va aquí: vive en index.html y es lo que se ve sin JS. Esto solo
// trae el inglés. Al agregar contenido nuevo a la portada hay que marcarlo con
// data-i18n y agregar su clave aquí, o se quedará en español al cambiar a EN.
//
// Guardarraíles (los mismos de marketing/facebook/CONTENIDO.md en CopiasMango):
// MiCaja no factura (ni CFDI ni SAT), no tiene app móvil y no tiene nube. Nada
// de testimonios, cifras de clientes ni nombres de negocios reales.

window.MICAJA_EN = Object.assign(window.MICAJA_EN || {}, {

  '@title':       'MiCaja — POS System',
  '@description': 'Point of sale and inventory system built for stationery shops and grocery stores.',

  'skip':     'Skip to content',
  'nav.aria': 'Main navigation',

  // ── Hero ──
  'hero.eyebrow': 'POS System',
  'hero.title':   'Your register,<br><em>smarter.</em>',
  'hero.sub':     'For stationery shops, grocery stores, hardware stores, bakeries — any business that rings up sales at the counter.',
  'hero.cta1':    'Send us a message',
  'hero.cta2':    'See what it does',

  // ── Barra de hechos ──
  'fact1.label': 'No internet, no cloud',
  'fact1.desc':  'It runs on your local network under Windows. Your data never leaves your business — no subscriptions, no outside servers.',
  'fact2.label': 'Admin and Cashier',
  'fact2.desc':  'Returns, backups and settings are yours alone. The cashier rings up sales and checks their own tickets for the day, and that is as far as it goes.',

  // ── Funciones ──
  'func.title': 'Everything your<br><em>business needs.</em>',
  'func.desc':  'Eight screens, none of them filler. What a counter actually uses every day.',

  'f1.name': 'Point of Sale',
  'f1.desc': 'Search by name or by code, or scan with the reader. Editable cart, payment in cash or by card, and the change worked out for you.',
  'f2.name': 'Inventory',
  'f2.desc': 'Add and edit products with cost price, sale price and the margin worked out for you. Stock is deducted on every sale.',
  'f3.name': 'Dashboard',
  'f3.desc': 'Sales, income, expenses and the balance for the day. Charts by week and by month, payment methods, and how much each cashier sold.',
  'f4.name': 'Tickets',
  'f4.desc': 'History grouped by day, with the ticket ready to reprint, save as an image or send over WhatsApp. Full returns or a single product.',
  'f5.name': 'Labels',
  'f5.desc': 'Barcode labels to print on letter-size paper, in several sizes. Bulk selection with filters by category or by date.',
  'f6.name': 'Users and roles',
  'f6.desc': 'Create cashiers and give each one their own login. Everyone signs in as themselves and sees only what they should.',
  'f7.name': 'Settings',
  'f7.desc': 'Your business name and phone number, printed on every ticket and shown on the login screen.',
  'f8.name': 'Network access',
  'f8.desc': 'A QR code with the address of the system, to connect a tablet, a laptop or your phone from wherever you are standing.',

  // ── Galería (una sola clave por pantalla: pie, alt y rótulo) ──
  'gal.pos':     'Point of Sale',
  'gal.inv':     'Inventory',
  'gal.dash':    'Dashboard',
  'gal.tickets': 'Tickets',
  'gal.etiq':    'Labels',
  'gal.config':  'Settings',

  'lb.dialog': 'Screenshot preview',
  'lb.close':  'Close preview',
  'lb.prev':   'Previous image',
  'lb.next':   'Next image',

  // ── Celular ──
  'cel.title': 'The same register,<br><em>on your phone.</em>',
  'cel.desc':  'It opens in the browser on your phone or a tablet, with the same catalog and the same cart as the computer at the counter.',
  'cel.alt1':  'The MiCaja product grid on a phone screen',
  'cel.alt2':  'The MiCaja checkout screen on a phone, showing the total and the cash received',
  'cel.nota':  'The ticket is still printed by the computer at the register: that is where the printer is plugged in.',

  // ── Hardware ──
  'hw.title': 'It runs on the equipment<br><em>you already have.</em>',
  'hw.desc':  'MiCaja installs on the computer at your counter — one you have sitting in storage works too. There is no new terminal to buy.',
  'hw.alt':   'A Lenovo ThinkCentre mini PC running under a shop counter',
  'hw.pie':   'A second-hand mini PC under the counter. That is enough to run the register, the inventory and the dashboard for the business.',

  'hw1.nombre': 'Scale',
  'hw2.nombre': 'Receipt printer',
  'hw2.modelo': '58 mm thermal ESC/POS',
  'hw3.nombre': 'Barcode reader',
  'hw3.modelo': 'USB, or the camera',
  'hw4.nombre': 'Cash drawer',
  'hw4.modelo': 'Opens on payment',

  'hw.nota': 'This is hardware proven at the counter, not a compatibility list. If you have a different model, write to us and we will check it before you buy anything. Brand names belong to their manufacturers and we have no commercial relationship with them.',

  // ── Clientes ──
  'cli.title': 'It is already on<br><em>real counters.</em>',
  'cli.desc':  'Businesses that open, ring up sales and close out the register with MiCaja every day.',
  'cli.alt':   'A counter with MiCaja on screen, a barcode reader and a thermal printer',
  'cli.pie':   'A counter working with MiCaja: barcode reader, thermal printer and cash drawer, on the computer the business already had.',

  'cli1.lugar':  'Groceries · Puebla',
  'cli1.nombre': 'A neighborhood store',
  'cli1.desc':   'Barcode reader, receipt printer and cash drawer, on the same computer they already had at the counter. They did not buy anything new.',
  'cli2.lugar':  'Stationery shop',
  'cli2.nombre': 'Where everything gets tested first',
  'cli2.desc':   'Every MiCaja feature goes through this counter before it reaches any other business. Poster board, notebooks, craft foam: every product with its price and its stock, and the ticket printing itself as the sale closes.',

  // ── Decisiones de diseño ──
  'dec.title': 'Why it is built<br><em>this way.</em>',
  'dec.desc':  'Four decisions we made on purpose. Nobody asks for them in a demo, but you notice them a month into using it.',

  'dec1.titulo': 'The cashier does not see your costs',
  'dec1.texto':  'They can sell, take payment, print the ticket and even adjust a price with your PIN. But what each item cost you and which supplier you buy it from, <strong>that is for your eyes only</strong>. It is not distrust: that number simply does not help them serve people quickly.',
  'dec2.titulo': 'A canceled ticket is not deleted',
  'dec2.texto':  'It is marked as canceled and it stays on record with <strong>who did it, when and why</strong>. The history is a logbook, not a draft: what happened at your register can be looked up later, even when it was a mistake.',
  'dec3.titulo': 'You do not need internet to sell',
  'dec3.texto':  'The system lives on your own network, not on someone else’s server. If the internet goes down <strong>you keep ringing up sales</strong>, printing tickets and deducting stock just like always.',
  'dec4.titulo': 'Prices change without leaving the sale',
  'dec4.texto':  'With your admin PIN, which expires on its own after a while. Built for businesses where prices change often: <strong>the cashier does not have to go to Inventory</strong> or call you with a line waiting.',

  // ── Para que no haya sorpresas ──
  'avi.title': 'So there are<br><em>no surprises.</em>',
  'avi.desc':  'Three things worth knowing now, rather than on installation day.',

  'avi1.titulo': 'Invoicing is handled elsewhere',
  'avi1.texto':  'MiCaja keeps your sales, your inventory and your register. It does not issue CFDI invoices and does not connect to the SAT, so you keep handling the tax side wherever you handle it today.',
  'avi2.titulo': 'Your data lives in your business',
  'avi2.texto':  'There is no outside server and no monthly subscription: everything sits on the computer at your counter. In exchange, the backup is on you.',
  'avi3.titulo': 'On your phone you go in through the browser',
  'avi3.texto':  'There is nothing to download from an app store: it opens in the browser, with the same login and the same information.',

  // ── Preguntas ──
  'faq.title': 'Questions<br><em>we get asked.</em>',

  'faq1.p': 'Does it work for my kind of business?',
  'faq1.r': 'If you sell products with a price and stock, yes. Today it is running in stationery shops and grocery stores, and it works the same way in produce stands, hardware stores or bakeries. You can sell by the piece, by the kilo, or both on the same ticket.',
  'faq2.p': 'Can I use it on more than one computer?',
  'faq2.r': 'Yes. Every machine on the business network sees the same system: the register at the counter, a tablet in the aisle and the office computer all work on the same products and the same sales, at the same time.',
  'faq3.p': 'What happens if the computer breaks down?',
  'faq3.r': 'MiCaja lets you download a full backup and restore it on another machine. Doing that every so often is the part that is on you.',
  'faq4.p': 'Can a cashier delete a sale and keep the money?',
  'faq4.r': 'They can cancel a ticket, but not make it disappear. The cancellation stays on record with their name, the time and the reason, and you see it in the history when you review the day.',
  'faq5.p': 'How do I install it?',
  'faq5.r': 'We do the installation on your equipment. The step by step for everything else — from the first login to closing out the register each day — is in the <a href="manual.pdf" download>user manual</a>, which you can read before you decide.',

  // ── CTA del manual ── (el PDF solo existe en español: el chip lo dice)
  'man.title': 'Complete user<br>manual.',
  'man.desc':  'A step-by-step guide to running MiCaja — from the first login to closing out the register each day.',
  'man.chip1': 'PDF · Spanish',
  'man.chip2': 'Updated 2026',
  'man.btn':   'Download Manual',

  // ── Pie ──
  'pie.fb':       'Find us on Facebook',
  'pie.terminos': 'Terms and Conditions'

});

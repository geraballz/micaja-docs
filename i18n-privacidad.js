// ── Diccionario en inglés del Aviso de Privacidad ──
// Traducción de cortesía; rige el español de privacidad.html, igual que en
// i18n-terminos.js. Al cambiar un párrafo en español, actualizar su clave aquí.

window.MICAJA_EN = Object.assign(window.MICAJA_EN || {}, {

  '@title':       'Privacy Notice — MiCaja',
  '@description': 'Privacy Notice for MiCaja and the MiCaja Inventario app.',

  'volver':     'Back',
  'doc.titulo': 'Privacy<br>Notice',
  'doc.meta':   'MiCaja &mdash; In effect as of August 25, 2026 &mdash; micajapos.com.mx',
  'doc.nota-idioma': 'The Spanish version of this document is the only one that governs. This English translation is provided as a courtesy; in the event of any discrepancy, the Spanish text prevails.',
  'doc.pie':    'Last updated: August 25, 2026 &mdash; MiCaja &mdash; micajapos.com.mx',

  's1.h':  '1. Scope of this Notice',
  's1.p1': 'This Privacy Notice describes how data is handled in the MiCaja mobile apps &mdash; <strong>MiCaja Inventario</strong> for Android and its equivalent version for iOS (&ldquo;the App&rdquo;) &mdash; and clarifies their relationship with the MiCaja point of sale system (&ldquo;the Software&rdquo;), of which the App is only a read-only client.',
  's1.p2': 'This Notice supplements the MiCaja <a href="terminos.html">Terms and Conditions of Use</a>.',

  's2.h':  '2. The Software is self-hosted',
  's2.p1': 'The Software is installed and runs on the Customer’s own infrastructure: their computer or their server, inside their local network. The information the Customer records in it &mdash; products, stock, sales and any other operational data &mdash; is stored on that infrastructure and remains under their control and their responsibility.',
  's2.p2': 'The developer does not host, does not administer and has no access to the information of the businesses that use the Software. Consequently, with respect to that information the Customer is the data controller.',

  's3.h':  '3. Summary',
  's3.p1': '<strong>The App does not collect, transmit or share personal data with the developer or with third parties.</strong> It includes no user accounts, no advertising, no analytics, no tracking, no measurement tools and no crash reporting services.',
  's3.p2': 'The App works solely as a read-only client of the MiCaja server the Customer runs on their own local network. All information stays between the Customer’s device and their own server.',

  's4.h':  '4. Information the App handles',
  's4.h1': '4.1 Catalog data',
  's4.p1': 'The App downloads its product information from the Customer’s MiCaja server: name, price, stock, unit of measure, barcode, category, expiration date, availability and images. This information belongs to the Customer, is stored only on the device, and is not sent anywhere other than the Customer’s own server.',
  's4.p2': 'This is commercial information about the business, not personal data about consumers.',
  's4.h2': '4.2 Server address',
  's4.p3': 'The App saves on the device the network address of the MiCaja server that the Customer enters manually on the settings screen, for the sole purpose of being able to sync without asking for it again.',
  's4.h3': '4.3 Camera',
  's4.p4': 'The App requests camera permission for a single purpose: reading product barcodes. Image processing happens entirely on the device. <strong>No photographs are taken, no video is recorded, no images are stored and nothing the camera captures is transmitted.</strong> The permission is optional: the rest of the App works without granting it.',
  's4.h4': '4.4 Data the App does not handle',
  's4.p5': 'The App does not request or access: location, contacts, calendar, microphone, personal files, advertising identifiers, browsing history, payment information or health data.',

  's5.h':  '5. No third parties',
  's5.p1': 'The App integrates no analytics, advertising, attribution or error reporting libraries. There is no transfer of information to outside providers, because there is no information to transfer beyond the device and the Customer’s server.',
  's5.p2': 'Barcode recognition is performed with a library that operates entirely offline inside the device.',

  's6.h':  '6. Network connections',
  's6.p1': 'The App connects only to the address of the MiCaja server the Customer configures, normally inside their own local network. It does not communicate with the developer’s servers.',
  's6.p2': 'Because that connection happens inside the Customer’s private network, it may take place without transport encryption. It is up to the Customer to keep their local network protected. The App does not expose their server to the Internet and does not enable any remote access.',
  's6.p3': 'The App includes links to the MiCaja website and Facebook page. When they are opened, browsing is subject to the privacy policies of those sites.',

  's7.h':  '7. Retention and deletion',
  's7.p1': 'Catalog information is kept in the device’s local storage until one of the following happens: a new sync replaces it, the Customer clears the App’s data from the system settings, or the Customer uninstalls the App. In the last two cases, deletion is complete and immediate.',
  's7.p2': 'Since the developer keeps no copy of this information, there is no deletion request procedure with the developer: control rests entirely with the Customer.',

  's8.h':  '8. Minors',
  's8.p1': 'The App is a commercial tool aimed at business owners and their employees. It is neither designed for nor directed at children under 13, and it does not knowingly collect information from them.',

  's9.h':  '9. Security',
  's9.p1': 'The information stored on the device is protected by the operating system’s app sandboxing and encryption mechanisms. The Customer is advised to protect the device with a screen lock and to keep their local network password-protected.',

  's10.h':  '10. Changes to this Notice',
  's10.p1': 'This Notice may be updated to reflect changes in the App or in applicable regulations. The version in force will always be available at micajapos.com.mx/privacidad.html, stating its last update date.',

  's11.h':   '11. Contact',
  's11.p1':  'For any question about this Privacy Notice or about how information is handled:',
  's11.li1': '<strong>Website:</strong> micajapos.com.mx',
  's11.li2': '<strong>Facebook:</strong> facebook.com/profile.php?id=61576392462341',
  's11.p2':  'Hours: Monday to Friday, 9:00 to 18:00 (Central Mexico time).',

  'pie.fb':       'Find us on Facebook',
  'pie.terminos': 'Terms and Conditions'

});

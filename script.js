const PRODUCTS = [
  { id: 'wood50', name: 'Legna sfusa da 50 cm', category: 'bois', badge: '50 cm', price: 89, unit: 'stere', image: 'images/chene.jpg', featured: false },
  { id: 'wood40', name: 'Legna sfusa da 40 cm', category: 'bois', badge: '40 cm', price: 95, unit: 'stere', image: 'images/hetre.webp', featured: false },
  { id: 'wood33', name: 'Legna sfusa da 33 cm', category: 'bois', badge: '33 cm', price: 102, unit: 'stere', image: 'images/charme.webp', featured: true },
  { id: 'wood25', name: 'Legna sfusa da 25 cm', category: 'bois', badge: '25 cm', price: 115, unit: 'stere', image: 'images/frene.jpg', featured: false },
  { id: 'wood-palette', name: 'Pallet di legna accatastata', category: 'bois', badge: 'Su richiesta', price: null, unit: 'pallet', image: 'images/pallettes.jpg', featured: false },
  { id: 'pellet-sac', name: 'Sacco di pellet da 15 kg', category: 'granules', badge: '15 kg', price: 5.90, unit: 'sacco', image: 'images/05c69ff2-a266-4863-8eaf-58d30fbf2f75.jfif', featured: false },
  { id: 'pellet-palette', name: 'Pallet di pellet', category: 'granules', badge: 'ENplus A1', price: 385, unit: 'pallet', image: 'images/10f257ce-9b29-49ee-a8a4-07ee7c95473d.jfif', featured: true },
  { id: 'pellet-premium', name: 'Pallet di pellet Premium', category: 'granules', badge: 'Premium', price: 425, unit: 'pallet', image: 'images/05a12da0-f29b-4afc-813c-e6c41bcba3c2.jfif', featured: false },
  { id: 'day-logs', name: 'Bricchette di legno per il giorno', category: 'densifie', badge: 'Giorno', price: 5.50, unit: 'confezione', image: 'images/images (9).jfif', featured: true },
  { id: 'night-logs', name: 'Bricchette di legno per la notte', category: 'densifie', badge: 'Notte', price: 6.50, unit: 'confezione', image: 'images/images (9).jfif', featured: false },
  { id: 'kindling', name: 'Legnetti extra secchi per accensione', category: 'allumage', badge: 'Extra secchi', price: 7.50, unit: 'rete', image: 'images/0f726f19-8251-444e-8aa5-f65d324781d1.jfif', featured: true },
  { id: 'firelighters', name: 'Accendifuoco ecologici', category: 'allumage', badge: 'Naturali', price: 6.90, unit: 'scatola', image: 'images/22b988fe-d9bf-4c1c-a3a1-19ed65007de3.jfif', featured: false },
  { id: 'cover', name: 'Copertura protettiva per pallet', category: 'allumage', badge: 'Protezione', price: 24.90, unit: 'pezzo', image: 'images/bbbcc.webp', featured: false }
];
const CATEGORY_LABELS = { bois: 'Legna da ardere', granules: 'Pellet di legno', densifie: 'Bricchette di legno', allumage: 'Accensione e accessori' };
const CART_STORAGE_KEY = 'flammeche_request_v1';
const CONTACT_EMAIL = 'boischauffageeit@gmail.com';
const WHATSAPP_PHONE = '33353014218';
let activeCategory = 'tout';
let maxPrice = 450;
const ITALIAN_TRANSLATIONS = [
  ['Garantie & conditions', 'Garanzia e condizioni'], ['Politique de confidentialité', 'Informativa sulla privacy'], ['Mentions légales', 'Note legali'],
  ['Le bon feu, tout simplement', 'Il piacere del fuoco, semplicemente'], ['Demande sans engagement', 'Richiesta senza impegno'], ['Sélection Bois & Braise', 'La selezione Bois & Braise'],
  ['Conseils & recettes', 'Consigli e idee'], ['Notre histoire', 'La nostra storia'], ['Nos produits', 'I nostri prodotti'], ['Questions fréquentes', 'Domande frequenti'],
  ['Ouvrir le menu', 'Apri il menu'], ['Navigation principale', 'Navigazione principale'], ['Accueil', 'Home'], ['Contact', 'Contatti'],
  ['Ma demande', 'La mia richiesta'], ['Le goût des choses vraies', 'Il calore delle cose autentiche'], ['Le feu,', 'Il fuoco,'], ['avec intention.', 'con intenzione.'],
  ['Bois de chauffage certifié NF, granulés ENplus A1, bûches densifiées sans colle : tout pour chauffer votre maison et profiter de vos soirées au coin du feu. Allumer quelque chose de vrai.', 'Legna da ardere certificata NF, pellet ENplus A1 e bricchette senza colla: tutto ciò che serve per riscaldare casa e godersi le serate davanti al camino. Accendi qualcosa di autentico.'],
  ['Voir nos produits', 'Scopri i prodotti'], ['Tout voir', 'Vedi tutto'], ['Selon votre façon de vivre le feu', 'Per il tuo modo di vivere il fuoco'], ['Trouvez votre feu', 'Trova il tuo fuoco'],
  ['Bois de chauffage', 'Legna da ardere'], ['Granulés', 'Pellet'], ['Bûches densifiées', 'Bricchette di legno'], ['Allumage', 'Accensione'],
  ['Simple comme un feu de cheminée', 'Semplice come un fuoco nel camino'], ['Comment', 'Come'], ['ça marche', 'funziona'],
  ['Aucun compte à créer, aucun paiement en ligne, aucun engagement.', 'Nessun account, nessun pagamento online, nessun impegno.'],
  ['Vous composez votre sélection', 'Componi la tua selezione'], ['Choisissez vos produits et les quantités souhaitées.', 'Scegli i prodotti e le quantità desiderate.'],
  ['Vous nous envoyez votre demande', 'Ci invii la tua richiesta'], ['En quelques instants, sans créer de compte ni payer en ligne.', 'In pochi istanti, senza creare un account né pagare online.'],
  ['Nous vous rappelons', 'Ti richiamiamo'], ['Nous confirmons ensemble disponibilité, livraison et prix final.', 'Confermiamo insieme disponibilità, consegna e prezzo finale.'],
  ['Notre promesse', 'La nostra promessa'], ['Nous ne vendons pas seulement du bois.', 'Non vendiamo solo legna.'], ['Nous vous apportons la chaleur.', 'Ti portiamo il calore.'],
  ['Des produits sélectionnés avec soin, des conseils sans détour et une équipe qui prend le temps de vous rappeler.', 'Prodotti selezionati con cura, consigli chiari e un team che si prende il tempo per richiamarti.'],
  ['Bois bien sec', 'Legna ben essiccata'], ['Un taux d’humidité maîtrisé, pour un feu efficace.', 'Umidità controllata per una combustione efficace.'], ['Un taux d\'humidité maîtrisé, pour un feu efficace.', 'Umidità controllata per una combustione efficace.'],
  ['Granulés certifiés', 'Pellet certificato'], ['La qualité ENplus A1 pour une chaleur régulière.', 'Qualità ENplus A1 per un calore costante.'], ['Sans colle', 'Senza colla'], ['Des bûches densifiées pensées pour brûler proprement.', 'Bricchette progettate per una combustione pulita.'],
  ['Le site', 'Il sito'], ['Une question ?', 'Hai una domanda?'], ['Nous contacter', 'Contattaci'], ['Le bon feu, tout simplement.', 'Il piacere del fuoco, semplicemente.'],
  ['Des produits choisis pour réchauffer vos maisons et vos moments.', 'Prodotti scelti per scaldare la casa e i tuoi momenti.'], ['© 2026 Bois & Braise', '© 2026 Bois & Braise'],
  ['Choisissez votre', 'Scegli il tuo'], ['feu.', 'fuoco.'], ['Du bois certifié aux granulés, composez une demande selon vos besoins. Nous vous rappelons pour confirmer chaque détail.', 'Dalla legna certificata al pellet, componi una richiesta secondo le tue esigenze. Ti richiamiamo per confermare ogni dettaglio.'],
  ['Parcourir', 'Esplora'], ['Catégories', 'Categorie'], ['Tout voir', 'Tutti i prodotti'], ['Granulés de bois', 'Pellet di legno'], ['Allumage & accessoires', 'Accensione e accessori'],
  ['Prix maximum', 'Prezzo massimo'], ['La palette de bois rangé est proposée sur demande.', 'Il pallet di legna accatastata è disponibile su richiesta.'], ['Trier par', 'Ordina per'], ['Recommandés', 'Consigliati'],
  ['Prix croissant', 'Prezzo crescente'], ['Prix décroissant', 'Prezzo decrescente'], ['Nom', 'Nome'], ['Aucun produit ne correspond à ces critères.', 'Nessun prodotto corrisponde ai criteri selezionati.'],
  ['Pour les amoureux du feu', 'Per chi ama il fuoco'], ['Un feu qui vous ressemble.', 'Un fuoco che ti somiglia.'], ['Un feu bien préparé commence par le bon combustible. Choisissez vos produits, indiquez vos quantités et laissez-nous vous guider pour la suite.', 'Un buon fuoco inizia dal combustibile giusto. Scegli i prodotti, indica le quantità e ti guideremo nei prossimi passi.'],
  ['Bien choisir son bois', 'Scegliere la legna giusta'], ['Deux repères utiles', 'Due consigli utili'], ['Le bon format', 'Il formato giusto'], ['Quelle longueur de bûche ?', 'Qual è la lunghezza giusta dei ciocchi?'],
  ['Mesurez la largeur utile de votre foyer. Nous gardons une marge pour faciliter la mise en place.', 'Misura la larghezza utile del focolare. Lasciamo un po’ di spazio per sistemare facilmente i ciocchi.'],
  ['Largeur utile du foyer (en cm)', 'Larghezza utile del focolare (cm)'], ['Préparer l’hiver', 'Prepararsi all’inverno'], ['Combien de stères ?', 'Quanta legna serve?'],
  ['Votre usage', 'Uso previsto'], ['Chauffage principal', 'Riscaldamento principale'], ['Chauffage d’appoint', 'Riscaldamento integrativo'], ['Chauffage d\'appoint', 'Riscaldamento integrativo'], ['Flambées week-end', 'Fuochi nel fine settimana'],
  ['Surface chauffée (m²)', 'Superficie riscaldata (m²)'], ['Isolation', 'Isolamento'], ['Moyenne', 'Medio'], ['Bonne', 'Buono'], ['À améliorer', 'Da migliorare'], ['Longueur des bûches', 'Lunghezza dei ciocchi'],
  ['Ajouter 8 stères à ma demande', 'Aggiungi 8 steri alla mia richiesta'],
  ['Le carnet du feu', 'Il diario del fuoco'], ['Tous les', 'Tutti i'], ['conseils.', 'consigli.'], ['Des repères simples pour choisir votre combustible, faire durer votre feu et profiter pleinement de sa chaleur.', 'Consigli semplici per scegliere il combustibile, far durare il fuoco e godersi tutto il suo calore.'],
  ['Tous les conseils', 'Tutti i consigli'], ['Bien choisir', 'Scegliere bene'], ['Bien utiliser', 'Usare al meglio'], ['Bien stocker', 'Conservare bene'], ['Lire le conseil', 'Leggi il consiglio'], ['Lire l’article', 'Leggi l’articolo'],
  ['Qu\'est-ce qu\'un stère de bois ?', 'Che cos’è uno stero di legna?'], ['Pourquoi choisir un bois à moins de 20 % d\'humidité ?', 'Perché scegliere legna con meno del 20% di umidità?'],
  ['Quelle longueur de bûche pour mon appareil ?', 'Quale lunghezza di ciocco scegliere per la stufa?'], ['Bûches densifiées : de jour ou de nuit ?', 'Bricchette: da giorno o da notte?'],
  ['Allumer son feu par le haut : la méthode simple', 'Accendere il fuoco dall’alto: il metodo semplice'], ['Bien stocker ses granulés et son bois', 'Come conservare pellet e legna'],
  ['Ça vous plaît ?', 'Ti piace?'], ['Faites votre sélection.', 'Componi la tua selezione.'], ['Bois de chauffage, granulés, bûches densifiées et allumage : trouvez ce qu\'il vous faut.', 'Legna da ardere, pellet, bricchette e accessori per l’accensione: trova ciò che fa per te.'], ['Voir nos conseils', 'Scopri i consigli'],
  ['On vous écoute', 'Ti ascoltiamo'], ['Contactez-', 'Contattaci'], ['nous.', ''], ['Votre demande nous est transmise directement. Aucun paiement en ligne.', 'La tua richiesta viene preparata direttamente. Nessun pagamento online.'],
  ['À votre écoute', 'A tua disposizione'], ['Parlons de votre projet.', 'Parliamo del tuo progetto.'], ['Une question sur un produit, une livraison ou votre sélection ? Nous vous rappelons pour en discuter.', 'Hai una domanda su un prodotto, una consegna o la tua selezione? Ti richiamiamo per parlarne.'],
  ['Votre nom *', 'Nome *'], ['Téléphone *', 'Telefono *'], ['E-mail (facultatif)', 'E-mail (facoltativa)'], ['Ville ou code postal (facultatif)', 'Città o CAP (facoltativi)'],
  ['Votre message (facultatif)', 'Messaggio (facoltativo)'], ['Comment pouvons-nous vous aider ?', 'Come possiamo aiutarti?'], ['Envoyer mon message', 'Invia il messaggio'], ['Envoyer via Gmail', 'Invia via Gmail'], ['Envoyer via WhatsApp', 'Invia via WhatsApp'],
  ['L\'envoi ouvre votre messagerie avec votre message préparé à boischauffageeit@gmail.com.', 'Si aprirà il tuo programma di posta con il messaggio pronto per boischauffageeit@gmail.com.'],
  ['Besoin d\'un repère ?', 'Hai bisogno di una risposta?'], ['Questions', 'Domande'], ['fréquentes.', 'frequenti.'], ['Tout ce qu\'il faut savoir avant de composer votre demande.', 'Tutto quello che c’è da sapere prima di inviare la richiesta.'],
  ['Toutes les questions', 'Tutte le domande'], ['Ma demande', 'La mia richiesta'], ['Livraison', 'Consegna'], ['Bien choisir', 'Scegliere bene'],
  ['Comment passer commande ?', 'Come si effettua un ordine?'], ['Ajoutez les produits et les quantités souhaitées à « Ma demande », puis envoyez le formulaire. Nous vous rappelons pour vérifier les informations et confirmer la commande.', 'Aggiungi i prodotti e le quantità desiderate a “La mia richiesta”, poi invia il modulo. Ti richiamiamo per verificare i dettagli e confermare l’ordine.'],
  ['Dois-je payer en ligne ?', 'Devo pagare online?'], ['Non. Il n\'y a ni paiement en ligne ni création de compte. Votre sélection est une demande sans engagement, à confirmer avec notre équipe.', 'No. Non è previsto alcun pagamento online né la creazione di un account. La selezione è una richiesta senza impegno, da confermare con il nostro team.'],
  ['Les prix affichés sont-ils définitifs ?', 'I prezzi indicati sono definitivi?'], ['Les prix produits affichés servent d\'estimation. Le prix final et les conditions de livraison sont confirmés avec vous avant validation.', 'I prezzi dei prodotti sono indicativi. Il prezzo finale e le condizioni di consegna vengono confermati con te prima dell’ordine.'],
  ['Puis-je modifier ou annuler ma demande ?', 'Posso modificare o annullare la richiesta?'], ['Oui, contactez-nous avant la confirmation définitive. Une demande envoyée n\'est pas encore une commande ferme.', 'Sì, contattaci prima della conferma definitiva. Una richiesta inviata non è ancora un ordine vincolante.'],
  ['Livrez-vous chez moi ?', 'Consegnate nella mia zona?'], ['Indiquez votre ville ou code postal dans le formulaire. Nous vous confirmerons la zone desservie et les modalités par téléphone.', 'Indica la città o il CAP nel modulo. Ti confermeremo telefonicamente la zona servita e le modalità di consegna.'],
  ['Quels sont les délais de livraison ?', 'Quali sono i tempi di consegna?'], ['Le délai dépend du produit, de la disponibilité et de votre adresse. Il est convenu avec vous lors de notre rappel.', 'I tempi dipendono dal prodotto, dalla disponibilità e dal tuo indirizzo. Li concorderemo durante la chiamata.'],
  ['Que faire si un produit livré est abîmé ?', 'Cosa fare se un prodotto arriva danneggiato?'], ['Contactez-nous dès que possible au 03 53 01 42 18 ou par e-mail avec votre numéro de demande et des photos du produit concerné.', 'Contattaci appena possibile al numero 03 53 01 42 18 o via e-mail, indicando il numero della richiesta e allegando alcune foto.'],
  ['Quelle longueur de bûche choisir ?', 'Quale lunghezza di ciocco scegliere?'], ['Mesurez la largeur utile du foyer et gardez environ 10 cm de marge. Notre calculateur vous propose un format adapté.', 'Misura la larghezza utile del focolare e lascia circa 10 cm di margine. Il nostro calcolatore ti suggerirà il formato adatto.'],
  ['Combien de bois me faut-il pour l\'hiver ?', 'Quanta legna mi serve per l’inverno?'], ['Cela dépend de la surface chauffée, de l\'isolation, de votre appareil et de votre usage. Le calculateur de stères donne un repère indicatif, à affiner avec notre équipe.', 'Dipende dalla superficie riscaldata, dall’isolamento, dall’apparecchio e dall’uso. Il calcolatore fornisce una stima da perfezionare insieme al nostro team.'],
  ['Vous ne trouvez pas votre réponse ?', 'Non trovi la risposta che cerchi?'], ['Parlons-en', 'Parliamone'], ['Bien utiliser · 5 minutes', 'Usare al meglio · 5 minuti'],
  ['Allumer son feu par le haut : la méthode', 'Accendere il fuoco dall’alto: il metodo'], ['simple.', 'semplice.'], ['Un allumage progressif, moins de fumée au démarrage et un feu qui prend tranquillement.', 'Un’accensione graduale, meno fumo all’inizio e una fiamma che si propaga con calma.'],
  ['La méthode d\'allumage par le haut consiste à placer les bûches les plus grosses en bas, puis à construire au-dessus une petite pile de bois d\'allumage et d\'allume-feux. Le feu descend progressivement vers les bûches principales.', 'Il metodo dall’alto prevede di sistemare i ciocchi più grandi in basso e di creare sopra una piccola catasta di legnetti e accendifuoco. La fiamma scende gradualmente verso i ciocchi principali.'],
  ['Préparez le foyer', 'Prepara il focolare'], ['Vérifiez que l\'arrivée d\'air est ouverte et que le conduit tire correctement. Placez deux ou trois bûches sèches en laissant circuler l\'air entre elles. Une bûche adaptée à la largeur du foyer facilite une combustion régulière.', 'Verifica che la presa d’aria sia aperta e che la canna fumaria abbia un buon tiraggio. Disponi due o tre ciocchi secchi lasciando circolare l’aria. La lunghezza giusta favorisce una combustione regolare.'],
  ['Construisez le petit foyer', 'Prepara la catasta di accensione'], ['Disposez quelques morceaux de bois d\'allumage en croisant les couches, puis placez un allume-feu écologique au sommet. Évitez de tasser : l\'air est nécessaire à la flamme.', 'Sistema alcuni legnetti incrociati e posiziona un accendifuoco ecologico in cima. Non comprimere la catasta: la fiamma ha bisogno di aria.'],
  ['Allumez et laissez faire', 'Accendi e lascia agire'], ['Allumez l\'allume-feu et laissez la flamme progresser sans recharger trop tôt. Une fois les braises installées, ajustez l\'arrivée d\'air selon les consignes de votre appareil. Utilisez toujours un bois sec et respectez les instructions du fabricant.', 'Accendi l’accendifuoco e lascia propagare la fiamma senza aggiungere legna troppo presto. Quando si forma la brace, regola l’aria secondo le istruzioni dell’apparecchio. Usa sempre legna secca e segui le indicazioni del produttore.'], ['Articles récents', 'Articoli recenti'],
  ['Tout grand feu commence par une', 'Ogni grande fuoco comincia con una'], ['Humidité du bois', 'Umidità della legna'], ['Certification bois', 'Certificazione NF'], ['Granulés ENplus', 'Pellet ENplus'],
  ['Une chaleur qui a du sens.', 'Un calore che ha valore.'], ['Flammèche sélectionne des combustibles fiables et vous accompagne sans jargon. Nous préférons une conversation claire à un panier anonyme : vous nous dites ce qu\'il vous faut, nous vous rappelons pour confirmer.', 'Bois & Braise seleziona combustibili affidabili e ti accompagna con parole chiare. Preferiamo una conversazione diretta a un carrello anonimo: dicci cosa ti serve e ti richiamiamo per confermare.'],
  ['Le bon combustible, au bon format.', 'Il combustibile giusto, nel formato adatto.'], ['Bois de chauffage certifié NF, granulés ENplus A1, bûches densifiées sans colle et accessoires d\'allumage. Chaque produit est présenté avec son prix et son unité.', 'Legna certificata NF, pellet ENplus A1, bricchette senza colla e accessori per l’accensione. Ogni prodotto è presentato con prezzo e unità di vendita.'],
  ['Du temps pour bien faire.', 'Il tempo per fare le cose bene.'], ['Composez votre sélection sans compte et sans paiement en ligne. Nous vérifions les quantités, la disponibilité, les conditions de livraison et le prix définitif avant toute confirmation.', 'Componi la selezione senza account e senza pagare online. Prima della conferma verifichiamo quantità, disponibilità, condizioni di consegna e prezzo definitivo.'],
  ['Et pour tout ce qu\'il réchauffe.', 'E per tutto ciò che scalda.'], ['Les soirées qui s\'étirent, le premier café du matin, la maison où l\'on se retrouve. C\'est pour ces moments que nous prenons soin de ce que nous vous proposons.', 'Le serate che si allungano, il primo caffè del mattino, la casa in cui ritrovarsi. È per questi momenti che scegliamo con cura ciò che ti proponiamo.'],
  ['Garantie & conditions', 'Garanzia e condizioni'], ['Informations pratiques', 'Informazioni pratiche'], ['Demande et confirmation', 'Richiesta e conferma'],
  ['Les produits et prix présentés sur ce site permettent de composer une demande estimative. Aucun paiement en ligne n\'est proposé. La demande ne vaut pas commande ferme : notre équipe vous rappelle pour confirmer la disponibilité, le prix final, les frais et le délai de livraison. La commande est engagée uniquement après accord explicite des deux parties.', 'I prodotti e i prezzi presentati sul sito consentono di preparare una richiesta indicativa. Non sono previsti pagamenti online. La richiesta non costituisce un ordine vincolante: il nostro team ti richiama per confermare disponibilità, prezzo finale, costi e tempi di consegna. L’ordine è confermato solo con l’accordo esplicito di entrambe le parti.'],
  ['Produits et informations', 'Prodotti e informazioni'], ['Les visuels sont présentés à titre illustratif. Les caractéristiques propres à chaque combustible et les conseils d\'utilisation sont communiqués dans la fiche produit et confirmés lors de l\'échange avec Bois & Braise.', 'Le immagini hanno valore illustrativo. Le caratteristiche dei combustibili e i consigli d’uso sono indicati nelle schede prodotto e confermati durante il contatto con Bois & Braise.'],
  ['Réclamation', 'Reclami'], ['Pour toute question concernant une livraison ou un produit, contactez-nous dès que possible au 03 53 01 42 18 ou à boischauffageeit@gmail.com afin que nous puissions examiner votre demande.', 'Per qualsiasi problema relativo a una consegna o a un prodotto, contattaci al più presto al numero 03 53 01 42 18 o all’indirizzo boischauffageeit@gmail.com.'],
  ['Les présentes informations devront être complétées et vérifiées avant toute mise en exploitation commerciale.', 'Queste informazioni devono essere completate e verificate prima della pubblicazione commerciale.'],
  ['Informations réglementaires', 'Informazioni legali'], ['Éditeur du site', 'Titolare del sito'], ['Bois & Braise — SAS au capital de 5 000 €', 'Bois & Braise — SAS con capitale sociale di 5.000 €'], ['18 rue des Forgerons, 21000 Dijon', '18 rue des Forgerons, 21000 Digione, Francia'], ['SIRET : à compléter avant mise en ligne', 'SIRET: da completare prima della pubblicazione'], ['TVA intracommunautaire : à compléter', 'Partita IVA: da completare'], ['Directeur de la publication : Camille Morel', 'Direttore responsabile: Camille Morel'], ['Hébergement', 'Hosting'], ['OVH SAS, 2 rue Kellermann, 59100 Roubaix, France.', 'OVH SAS, 2 rue Kellermann, 59100 Roubaix, Francia.'], ['Les identifiants SIRET et TVA doivent être remplacés par les informations officielles de la société avant publication.', 'I dati SIRET e IVA devono essere sostituiti con quelli ufficiali dell’azienda prima della pubblicazione.'],
  ['Vos données', 'I tuoi dati'], ['Données saisies dans une demande', 'Dati inseriti nella richiesta'], ['Les informations saisies dans le formulaire sont utilisées pour préparer un e-mail adressé à Bois & Braise via le logiciel de messagerie de votre appareil. Le site ne transmet pas automatiquement ces informations à un serveur. La sélection des produits est conservée localement dans le navigateur de l\'utilisateur.', 'Le informazioni inserite nel modulo preparano un’e-mail a Bois & Braise tramite il programma di posta del tuo dispositivo. Il sito non invia automaticamente questi dati a un server. La selezione dei prodotti viene salvata localmente nel browser.'],
  ['Vos droits', 'I tuoi diritti'], ['Pour toute question relative à vos données, à leur accès, leur rectification ou leur suppression, écrivez à boischauffageeit@gmail.com.', 'Per domande sui tuoi dati, sull’accesso, la rettifica o la cancellazione, scrivi a boischauffageeit@gmail.com.'], ['Cookies et stockage', 'Cookie e archiviazione'], ['Ce site utilise le stockage local du navigateur pour mémoriser les produits de votre demande. Aucun compte n\'est créé et aucun paiement n\'est traité sur le site.', 'Questo sito usa la memoria locale del browser per ricordare i prodotti della tua richiesta. Non viene creato alcun account e non vengono elaborati pagamenti.'], ['Cette politique doit être validée par l\'éditeur et adaptée aux services réellement utilisés avant mise en ligne.', 'Questa informativa deve essere verificata dal titolare e adeguata ai servizi effettivamente utilizzati prima della pubblicazione.'],
  ['Confidentialité', 'Privacy'], ['Bois & Braise, accueil', 'Bois & Braise, home'], ['Nom', 'Nome'], ['Votre demande est prête.', 'La tua richiesta è pronta.'], ['Ajouter à ma demande', 'Aggiungi alla richiesta'], ['Demander le prix', 'Richiedi il prezzo'], ['Prix sur demande', 'Prezzo su richiesta'], ['Retirer', 'Rimuovi'], ['Fermer', 'Chiudi'], ['Total estimé', 'Totale stimato'], ['Vider ma sélection', 'Svuota la selezione'], ['Le tarif et la livraison seront confirmés avec vous.', 'Prezzi e consegna saranno confermati insieme a te.'], ['Votre sélection est vide. Choisissez des produits pour composer votre demande.', 'La selezione è vuota. Scegli i prodotti per comporre la richiesta.'], ['Votre nom *', 'Nome *'], ['Téléphone *', 'Telefono *'], ['E-mail', 'E-mail'], ['Ville ou code postal', 'Città o CAP'], ['Votre message', 'Il tuo messaggio'], ['Précisions sur votre demande...', 'Dettagli sulla tua richiesta...'], ['Envoyer ma demande', 'Invia la richiesta'], ['Aucun paiement en ligne. Nous vous rappelons pour confirmer votre demande.', 'Nessun pagamento online. Ti richiamiamo per confermare la richiesta.'], ['Finaliser ma demande', 'Completa la richiesta'], ['produit', 'prodotto'], ['produits', 'prodotti'], ['total estimé', 'totale stimato'], ['Cette sélection est conservée sur cet appareil.', 'La selezione viene salvata su questo dispositivo.'], ['Saisissez une largeur utile d’au moins 30 cm.', 'Inserisci una larghezza utile di almeno 30 cm.'], ['Pour ', 'Per '], [' cm de largeur utile, choisissez des bûches de ', ' cm di larghezza utile, scegli ciocchi da '], [' cm afin de garder un peu d’espace de chaque côté.', ' cm per lasciare un po’ di spazio ai lati.'], ['stères par hiver', 'steri per inverno'], ['Soit environ ', 'Circa '], [' pour ', ' per '], [' stères en ', ' steri da '], [' cm.', ' cm.'], ['Ajouté à votre demande', 'Aggiunto alla richiesta'], ['produit ajouté', 'prodotto aggiunto'], ['Retirer tous les produits de votre demande ?', 'Rimuovere tutti i prodotti dalla richiesta?'], [' stères ajoutés à votre demande', ' steri aggiunti alla richiesta'], ['Nom : ', 'Nome: '], ['Téléphone : ', 'Telefono: '], ['E-mail : ', 'E-mail: '], ['non renseigné', 'non indicato'], ['Ville / code postal : ', 'Città / CAP: '], ['Message : ', 'Messaggio: '], ['aucun', 'nessuno'], ['Sélection :', 'Selezione:'], ['Total estimé : ', 'Totale stimato: '], ['Demande de produits Flammèche', 'Richiesta prodotti Bois & Braise'], ['Message depuis flammeche.example', 'Messaggio dal sito Bois & Braise'], ['Votre demande est prête. Aucun paiement ne sera effectué en ligne.', 'La tua richiesta è pronta. Non verrà effettuato alcun pagamento online.'], ['Ouvrir votre messagerie pour l\'envoyer ↗', 'Apri la tua e-mail per inviarla ↗'], ['Votre message est prêt à être envoyé par e-mail.', 'Il messaggio è pronto per essere inviato via e-mail.'], ['Ajouté à votre demande', 'Aggiunto alla richiesta'],
  ['Le feu, avec intention', 'Il fuoco, con intenzione'], ['avec intention', 'con intenzione'], ['L\'envoi ouvre votre messagerie avec votre message préparé à boischauffageeit@gmail.com.', 'Si aprirà il tuo programma di posta con il messaggio pronto per boischauffageeit@gmail.com.'],
  ['Garantie &', 'Garanzia e'], ['conditions.', 'condizioni.'], ['Politique de', 'Informativa sulla'], ['confidentialité.', 'privacy.'], ['Mentions', 'Note'], ['légales.', 'legali.'],
  ['Catégories de questions', 'Categorie delle domande'], ['Marie Dupont', 'Maria Rossi'], ['vous@exemple.fr', 'tu@email.it'], ['21000 Dijon', '21000 Digione'], ['Dijon', 'Digione'],
  ['Meilleure vente', 'Più venduto'], ['Bûches de bois empilées près d\'un feu', 'Legna accatastata vicino al fuoco'], ['Granulés de bois en sac', 'Pellet di legno in sacco'], ['Intérieur chaleureux avec cheminée', 'Interno accogliente con camino'], ['Bois d\'allumage sec', 'Legnetti secchi per l’accensione'], ['Flammes dans une cheminée', 'Fiamme nel camino'], ['Feu de cheminée, au cœur de la maison', 'Fuoco nel camino, il cuore della casa'], ['Legna de chauffage premium', 'Legna da ardere di qualità'],
  ['Bûches 50 cm en vrac', 'Legna sfusa da 50 cm'], ['Bûches 40 cm en vrac', 'Legna sfusa da 40 cm'], ['Bûches 33 cm en vrac', 'Legna sfusa da 33 cm'], ['Bûches 25 cm en vrac', 'Legna sfusa da 25 cm'],
  ['Palette de bois rangé', 'Pallet di legna accatastata'], ['Sac de granulés 15 kg', 'Sacco di pellet da 15 kg'], ['Palette de granulés Premium', 'Pallet di pellet Premium'], ['Palette de granulés', 'Pallet di pellet'],
  ['Bûches densifiées de jour', 'Bricchette di legno per il giorno'], ['Bûches densifiées de nuit', 'Bricchette di legno per la notte'], ['Bois d\'allumage extra-sec', 'Legnetti extra secchi per accensione'], ['Allume-feux écologiques', 'Accendifuoco ecologici'], ['Housse de protection pour palette', 'Copertura protettiva per pallet'],
  ['stère', 'stere'], ['sac', 'sacco'], ['palette', 'pallet'], ['pack', 'confezione'], ['filet', 'rete'], ['boîte', 'scatola'], ['pièce', 'pezzo'], ['Jour', 'Giorno'], ['Nuit', 'Notte'], ['Naturels', 'Naturali'], ['Extra-sec', 'Extra secchi'], ['Sur demande', 'Su richiesta'], ['Protection', 'Protezione'], ['Premium', 'Premium'], ['ENplus A1', 'ENplus A1'], ['Prix au stère', 'Prezzo per stero'],
  ['Legna sfusa da 50 cm', 'Bûches 50 cm en vrac'], ['Legna sfusa da 40 cm', 'Bûches 40 cm en vrac'], ['Legna sfusa da 33 cm', 'Bûches 33 cm en vrac'], ['Legna sfusa da 25 cm', 'Bûches 25 cm en vrac'],
  ['Pallet di legna accatastata', 'Palette de bois rangé'], ['Sacco di pellet da 15 kg', 'Sac de granulés 15 kg'], ['Pallet di pellet Premium', 'Palette de granulés Premium'], ['Pallet di pellet', 'Palette de granulés'],
  ['Bricchette di legno per il giorno', 'Bûches densifiées de jour'], ['Bricchette di legno per la notte', 'Bûches densifiées de nuit'], ['Legnetti extra secchi per accensione', 'Bois d\'allumage extra-sec'], ['Accendifuoco ecologici', 'Allume-feux écologiques'], ['Copertura protettiva per pallet', 'Housse de protection pour palette'],
  ['stere', 'stère'], ['sacco', 'sac'], ['pallet', 'palette'], ['confezione', 'pack'], ['rete', 'filet'], ['scatola', 'boîte'], ['pezzo', 'pièce'], ['Giorno', 'Jour'], ['Notte', 'Nuit'], ['Naturali', 'Naturels'], ['Extra secchi', 'Extra-sec'], ['Su richiesta', 'Sur demande'], ['Protezione', 'Protection']
];
const ITALIAN_TRANSLATION_ENTRIES = [...ITALIAN_TRANSLATIONS].sort((a, b) => b[0].length - a[0].length);
const FRENCH_TRANSLATION_ENTRIES = ITALIAN_TRANSLATIONS
  .filter(([, italian]) => italian.length > 0)
  .map(([french, italian]) => [italian, french])
  .sort((a, b) => b[0].length - a[0].length);
function translateText(value, language = activeTranslationLanguage) {
  if (language === 'fr') return value;
  let translated = value;
  const entries = ITALIAN_TRANSLATION_ENTRIES;
  for (const [source, target] of entries) {
    if (/^[\p{L}\p{N}]+$/u.test(source)) {
      const escaped = source.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      translated = translated.replace(new RegExp(`(^|[^\\p{L}\\p{N}])${escaped}(?=$|[^\\p{L}\\p{N}])`, 'gu'), (_match, prefix) => `${prefix}${target}`);
    } else {
      translated = translated.split(source).join(target);
    }
  }
  return translated;
}
function translateDocument(doc, language = activeTranslationLanguage) {
  if (doc.documentElement) doc.documentElement.lang = language;
  if (language === 'fr') return doc;
  const walker = doc.createTreeWalker(doc, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) node.nodeValue = translateText(node.nodeValue, language);
  doc.querySelectorAll('[aria-label], [alt], [placeholder], [title]').forEach(element => {
    for (const attribute of ['aria-label', 'alt', 'placeholder', 'title']) {
      if (element.hasAttribute(attribute)) element.setAttribute(attribute, translateText(element.getAttribute(attribute), language));
    }
  });
  const description = doc.querySelector('meta[name="description"]');
  if (description && language === 'it') description.content = 'Bois & Braise: legna da ardere certificata NF, pellet ENplus A1 e bricchette senza colla. Componi la tua richiesta, ti richiamiamo per confermare.';
  return doc;
}
const euro = value => new Intl.NumberFormat(activeTranslationLanguage === 'fr' ? 'fr-FR' : 'it-IT', { style: 'currency', currency: 'EUR' }).format(value);
const FRENCH_PRODUCTS = {
  wood50: ['Bûches 50 cm en vrac', 'stère'], wood40: ['Bûches 40 cm en vrac', 'stère'],
  wood33: ['Bûches 33 cm en vrac', 'stère'], wood25: ['Bûches 25 cm en vrac', 'stère'],
  'wood-palette': ['Palette de bois rangé', 'palette'], 'pellet-sac': ['Sac de granulés 15 kg', 'sac'],
  'pellet-palette': ['Palette de granulés', 'palette'], 'pellet-premium': ['Palette de granulés Premium', 'palette'],
  'day-logs': ['Bûches densifiées de jour', 'pack'], 'night-logs': ['Bûches densifiées de nuit', 'pack'],
  kindling: ["Bois d'allumage extra-sec", 'filet'], firelighters: ['Allume-feux écologiques', 'boîte'],
  cover: ['Housse de protection pour palette', 'pièce']
};
const FRENCH_CATEGORIES = { bois: 'Bois de chauffage', granules: 'Granulés de bois', densifie: 'Bûches densifiées', allumage: 'Allumage & accessoires' };
function displayProductName(product) { return activeTranslationLanguage === 'fr' ? FRENCH_PRODUCTS[product.id]?.[0] || product.name : product.name; }
function displayProductUnit(product) { return activeTranslationLanguage === 'fr' ? FRENCH_PRODUCTS[product.id]?.[1] || product.unit : product.unit; }
function displayCategory(category) { return activeTranslationLanguage === 'fr' ? FRENCH_CATEGORIES[category] : CATEGORY_LABELS[category]; }
function displayProductBadge(product) {
  if (activeTranslationLanguage !== 'fr') return product.badge;
  return ({ 'day-logs': 'Jour', 'night-logs': 'Nuit', kindling: 'Extra-sec', firelighters: 'Naturels', 'wood-palette': 'Sur demande', cover: 'Protection' })[product.id] || product.badge;
}
function translateGeneratedSubtree(root) {
  if (activeTranslationLanguage !== 'fr' || !root) return;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    let text = node.nodeValue;
    for (const [source, target] of FRENCH_TRANSLATION_ENTRIES) {
      if (!source) continue;
      if (/^[\p{L}\p{N}]+$/u.test(source)) {
        const escaped = source.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        text = text.replace(new RegExp(`(^|[^\\p{L}\\p{N}])${escaped}(?=$|[^\\p{L}\\p{N}])`, 'gu'), (_match, prefix) => `${prefix}${target}`);
      } else text = text.split(source).join(target);
    }
    node.nodeValue = text;
  }
  root.querySelectorAll('[aria-label], [alt], [placeholder], [title]').forEach(element => {
    for (const attribute of ['aria-label', 'alt', 'placeholder', 'title']) {
      if (element.hasAttribute(attribute)) {
        const holder = document.createElement('span');
        holder.textContent = element.getAttribute(attribute);
        translateGeneratedSubtree(holder);
        element.setAttribute(attribute, holder.textContent);
      }
    }
  });
}
const LANGUAGE_OPTIONS = [
  ['it', 'Italiano'], ['fr', 'Français'], ['de', 'Deutsch'], ['en', 'English'],
  ['es', 'Español'], ['pt', 'Português'], ['nl', 'Nederlands']
];
let activeTranslationLanguage = 'it';
let visitorTranslationLanguage = 'it';
function detectVisitorLanguage() {
  const supported = new Set(LANGUAGE_OPTIONS.map(([code]) => code));
  for (const locale of navigator.languages || [navigator.language || 'it']) {
    const language = locale.toLowerCase().split('-')[0];
    if (supported.has(language)) return language;
  }
  return 'it';
}
function applyGoogleTranslation(language, attempt = 0) {
  const selector = document.querySelector('.goog-te-combo');
  if (!selector) {
    if (attempt < 40) window.setTimeout(() => applyGoogleTranslation(language, attempt + 1), 250);
    return;
  }
  selector.value = language === 'it' ? '' : language;
  selector.dispatchEvent(new Event('change', { bubbles: true }));
}
function initLanguageTranslator() {
  if (!document.querySelector('.site-header') || document.querySelector('#google_translate_element')) return;
  visitorTranslationLanguage = detectVisitorLanguage();
  if (visitorTranslationLanguage === 'it') return;
  const translatorRoot = document.createElement('div');
  translatorRoot.id = 'google_translate_element';
  translatorRoot.setAttribute('aria-hidden', 'true');
  translatorRoot.style.cssText = 'position:fixed;left:-10000px;top:-10000px;width:1px;height:1px;overflow:hidden';
  document.body.append(translatorRoot);
  window.googleTranslateElementInit = () => {
    if (!window.google?.translate?.TranslateElement) return;
    new google.translate.TranslateElement({
      pageLanguage: 'it',
      includedLanguages: LANGUAGE_OPTIONS.map(([code]) => code).join(','),
      autoDisplay: false
    }, 'google_translate_element');
    const languageSelect = document.querySelector('.goog-te-combo');
    applyGoogleTranslation(visitorTranslationLanguage, 1);
  };
  const translateScript = document.createElement('script');
  translateScript.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  translateScript.async = true;
  translateScript.onerror = () => toast('Traduzione automatica non disponibile: verifica la connessione internet.');
  document.head.append(translateScript);
}
const readCart = () => { try { return JSON.parse(localStorage.getItem(CART_STORAGE_KEY) || '{}'); } catch { return {}; } };
const writeCart = cart => { localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart)); updateCartUI(); };
const cartEntries = () => Object.entries(readCart()).filter(([, qty]) => qty > 0);
const cartCount = () => cartEntries().reduce((sum, [, qty]) => sum + qty, 0);
const cartTotal = () => cartEntries().reduce((sum, [id, qty]) => sum + ((PRODUCTS.find(product => product.id === id)?.price || 0) * qty), 0);
function changeQty(id, delta) {
  const product = PRODUCTS.find(item => item.id === id);
  if (!product || product.price === null) return;
  const cart = readCart();
  cart[id] = Math.max(0, (cart[id] || 0) + delta);
  if (!cart[id]) delete cart[id];
  writeCart(cart);
  renderProductQuantities();
  renderRequestLines();
}
function addQty(id, quantity = 1) { for (let i = 0; i < quantity; i += 1) changeQty(id, 1); }
function updateCartUI() {
  document.querySelectorAll('[data-cart-count]').forEach(node => { node.textContent = cartCount(); });
  document.querySelectorAll('[data-cart-total]').forEach(node => { node.textContent = euro(cartTotal()); });
  const bar = document.querySelector('.request-bar');
  if (bar) {
    bar.classList.toggle('visible', cartCount() > 0 && document.body.dataset.page === 'catalogue');
    const summary = bar.querySelector('[data-request-summary]');
    if (summary) summary.textContent = activeTranslationLanguage === 'fr'
      ? `${cartCount()} produit${cartCount() > 1 ? 's' : ''} · total estimé ${euro(cartTotal())}`
      : `${cartCount()} ${cartCount() === 1 ? 'prodotto' : 'prodotti'} · totale stimato ${euro(cartTotal())}`;
  }
}
function renderProductQuantities() {
  document.querySelectorAll('[data-product-id]').forEach(card => {
    const productId = card.dataset.productId;
    const qty = readCart()[productId] || 0;
    const add = card.querySelector('.add-product');
    const controls = card.querySelector('.card-quantity');
    if (add) { add.hidden = qty > 0; }
    if (controls) { controls.classList.toggle('visible', qty > 0); controls.querySelector('[data-qty-value]').textContent = qty; }
  });
}
function productCard(product) {
  const name = displayProductName(product);
  const unit = displayProductUnit(product);
  const category = displayCategory(product.category);
  const price = product.price === null ? (activeTranslationLanguage === 'fr' ? 'Prix sur demande' : 'Prezzo su richiesta') : `${euro(product.price)} <small>/ ${unit}</small>`;
  return `<article class="product-card" data-product-id="${product.id}"><div class="product-photo"><img src="${product.image}" alt="${name}" loading="lazy" onerror="this.onerror=null;this.src='images/melange.jpg'"><span class="product-badge">${displayProductBadge(product)}</span></div><div class="product-info"><h3>${name}</h3><div class="product-meta">${category}</div><div class="product-bottom"><span class="product-price">${price}</span>${product.price === null ? `<a class="add-product" href="contact.html">${activeTranslationLanguage === 'fr' ? 'Demander le prix' : 'Richiedi il prezzo'}</a>` : `<button class="add-product" data-add="${product.id}">${activeTranslationLanguage === 'fr' ? 'Ajouter à ma demande' : 'Aggiungi alla richiesta'}</button><div class="card-quantity"><button aria-label="${activeTranslationLanguage === 'fr' ? 'Retirer une unité' : 'Rimuovi un’unità'}" data-qty-change="-1" data-id="${product.id}">−</button><span data-qty-value>0</span><button aria-label="${activeTranslationLanguage === 'fr' ? 'Ajouter une unité' : 'Aggiungi un’unità'}" data-qty-change="1" data-id="${product.id}">+</button></div>`}</div></div></article>`;
}
function renderFeatured() {
  const container = document.querySelector('[data-featured]');
  if (!container) return;
  const featured = ['wood33', 'pellet-palette', 'day-logs', 'kindling'].map(id => PRODUCTS.find(item => item.id === id));
  container.innerHTML = featured.map(product => `<a class="feature-card" href="catalogue.html"><div class="feature-image"><img src="${product.image}" alt="${displayProductName(product)}" loading="lazy" onerror="this.onerror=null;this.src='images/melange.jpg'"></div><div class="feature-card-info"><div><h3>${displayProductName(product)}</h3><p>${displayCategory(product.category)}</p></div><span class="feature-price">${euro(product.price)} <small>/ ${displayProductUnit(product)}</small></span></div></a>`).join('');
}
function renderCatalogue() {
  const grid = document.querySelector('[data-product-grid]');
  if (!grid) return;
  const params = new URLSearchParams(location.search);
  const queryCategory = params.get('categorie');
  if (queryCategory && CATEGORY_LABELS[queryCategory]) activeCategory = queryCategory;
  const categoryButtons = [...document.querySelectorAll('[data-filter-category]')];
  categoryButtons.forEach(button => button.classList.toggle('active', button.dataset.filterCategory === activeCategory));
  const sort = document.querySelector('[data-sort]')?.value || 'recommended';
  let filtered = PRODUCTS.filter(product => (activeCategory === 'tout' || product.category === activeCategory) && (product.price === null ? maxPrice === 450 : product.price <= maxPrice));
  if (sort === 'price-asc') filtered.sort((a, b) => (a.price ?? Infinity) - (b.price ?? Infinity));
  if (sort === 'price-desc') filtered.sort((a, b) => (b.price ?? -Infinity) - (a.price ?? -Infinity));
  if (sort === 'name') filtered.sort((a, b) => a.name.localeCompare(b.name, 'fr'));
  grid.innerHTML = filtered.length ? filtered.map(productCard).join('') : `<p class="catalogue-empty">${activeTranslationLanguage === 'fr' ? 'Aucun produit ne correspond à ces critères.' : 'Nessun prodotto corrisponde ai criteri selezionati.'}</p>`;
  const count = document.querySelector('[data-results-count]');
  if (count) count.textContent = activeTranslationLanguage === 'fr'
    ? `${filtered.length} produit${filtered.length > 1 ? 's' : ''}`
    : `${filtered.length} ${filtered.length === 1 ? 'prodotto' : 'prodotti'}`;
  renderProductQuantities();
}
function openRequest() { document.querySelector('.request-overlay')?.classList.add('open'); document.body.classList.add('modal-open'); renderRequestLines(); }
function closeRequest() { document.querySelector('.request-overlay')?.classList.remove('open'); document.body.classList.remove('modal-open'); }
function renderRequestLines() {
  const list = document.querySelector('[data-request-lines]');
  if (!list) return;
  const entries = cartEntries();
  const isFrench = activeTranslationLanguage === 'fr';
  list.innerHTML = entries.length ? entries.map(([id, qty]) => { const product = PRODUCTS.find(item => item.id === id); return `<article class="request-line"><div><h3>${displayProductName(product)}</h3><p>${euro(product.price)} / ${displayProductUnit(product)} · ${euro(product.price * qty)}</p></div><div class="request-line-controls"><button data-qty-change="-1" data-id="${id}" aria-label="${isFrench ? 'Retirer une unité' : 'Rimuovi un’unità'}">−</button><span>${qty}</span><button data-qty-change="1" data-id="${id}" aria-label="${isFrench ? 'Ajouter une unité' : 'Aggiungi un’unità'}">+</button><button class="remove-line" data-remove-id="${id}">${isFrench ? 'Retirer' : 'Rimuovi'}</button></div></article>`; }).join('') : `<p class="request-empty">${isFrench ? 'Votre sélection est vide. Choisissez des produits pour composer votre demande.' : 'La selezione è vuota. Scegli i prodotti per comporre la richiesta.'}</p>`;
  const total = document.querySelector('[data-request-grand-total]');
  if (total) total.textContent = euro(cartTotal());
  document.querySelectorAll('[data-submit-request]').forEach(button => { button.disabled = entries.length === 0; });
}
function toast(message) { const node = document.querySelector('.toast'); if (!node) return; node.textContent = message; translateGeneratedSubtree(node); node.classList.add('visible'); window.setTimeout(() => node.classList.remove('visible'), 2200); }
function initRequestUI() {
  if (document.querySelector('.request-overlay')) return;
  const overlay = document.createElement('div');
  overlay.className = 'request-overlay';
  const french = activeTranslationLanguage === 'fr';
  overlay.innerHTML = `<section class="request-panel" role="dialog" aria-modal="true" aria-labelledby="request-title"><div class="request-panel-head"><h2 id="request-title">${french ? 'Ma demande' : 'La mia richiesta'}</h2><button class="close-request" data-close-request aria-label="${french ? 'Fermer' : 'Chiudi'}">×</button></div><div class="request-lines" data-request-lines></div><div class="request-summary"><span>${french ? 'Total estimé' : 'Totale stimato'}</span><strong data-request-grand-total>0,00 €</strong></div><div class="request-actions"><button class="clear-request" data-clear-request>${french ? 'Vider ma sélection' : 'Svuota la selezione'}</button><span class="muted">${french ? 'Le prix et la livraison seront confirmés avec vous.' : 'Prezzi e consegna saranno confermati insieme a te.'}</span></div><form class="contact-form" data-contact-form data-request-form><div class="full"><label for="request-name">${french ? 'Votre nom *' : 'Nome *'}</label><input id="request-name" name="name" required placeholder="${french ? 'Marie Dupont' : 'Maria Rossi'}"></div><div class="full"><label for="request-phone">${french ? 'Téléphone *' : 'Telefono *'}</label><input id="request-phone" name="phone" required type="tel" placeholder="06 12 34 56 78"></div><div class="full"><label for="request-email">E-mail</label><input id="request-email" name="email" type="email" placeholder="${french ? 'vous@exemple.fr' : 'tu@email.it'}"></div><div class="full"><label for="request-city">${french ? 'Ville ou code postal' : 'Città o CAP'}</label><input id="request-city" name="city" placeholder="${french ? '21000 Dijon' : 'Digione'}"></div><div class="full"><label for="request-message">${french ? 'Votre message' : 'Il tuo messaggio'}</label><textarea id="request-message" name="message" placeholder="${french ? 'Précisions sur votre demande...' : 'Dettagli sulla tua richiesta...'}"></textarea></div><button class="button button-yellow" type="submit" data-submit-request data-send-via="gmail">Invia via Gmail ↗</button><button class="button button-outline" type="submit" data-submit-request data-send-via="whatsapp">Invia via WhatsApp ↗</button><p class="muted full">${french ? 'Aucun paiement en ligne. Nous vous rappelons pour confirmer votre demande.' : 'Nessun pagamento online. Ti richiamiamo per confermare la richiesta.'}</p></form></section>`;
  document.body.append(overlay);
  const bar = document.createElement('div');
  bar.className = 'request-bar';
  bar.innerHTML = french
    ? '<div><strong data-request-summary>0 produit · total estimé 0,00 €</strong><br><span>Votre sélection est enregistrée sur cet appareil.</span></div><button data-open-request>Finaliser ma demande</button>'
    : '<div><strong data-request-summary>0 prodotti · totale stimato 0,00 €</strong><br><span>La selezione viene salvata su questo dispositivo.</span></div><button data-open-request>Completa la richiesta</button>';
  document.body.append(bar);
  const toastNode = document.createElement('div'); toastNode.className = 'toast'; toastNode.setAttribute('role', 'status'); document.body.append(toastNode);
  updateCartUI();
}
function setupLengthCalculator() {
  const widthInput = document.querySelector('[data-fireplace-width]');
  const result = document.querySelector('[data-length-result]');
  if (!widthInput || !result) return;
  const update = () => { const width = Number(widthInput.value); if (!width || width < 30) { result.textContent = activeTranslationLanguage === 'fr' ? 'Saisissez une largeur utile d’au moins 30 cm.' : 'Inserisci una larghezza utile di almeno 30 cm.'; return; } const maxLength = width - 10; const choice = [50, 40, 33, 25].find(length => length <= maxLength) || 25; result.textContent = activeTranslationLanguage === 'fr' ? `Pour ${width} cm de largeur utile, choisissez des bûches de ${choice} cm afin de garder un peu d’espace de chaque côté.` : `Con ${width} cm di larghezza utile, scegli ciocchi da ${choice} cm per lasciare spazio su entrambi i lati.`; };
  widthInput.addEventListener('input', update); update();
}
function setupStereCalculator() {
  const form = document.querySelector('[data-stere-calculator]');
  if (!form) return;
  form.addEventListener('submit', event => event.preventDefault());
  const output = form.querySelector('[data-stere-result]');
  const calculate = () => {
    const surface = Math.max(1, Number(form.querySelector('[name="surface"]').value) || 100);
    const usage = form.querySelector('[name="usage"]').value;
    const insulation = form.querySelector('[name="insulation"]').value;
    const length = Number(form.querySelector('[name="length"]').value);
    const usageFactor = { principal: .08, appoint: .04, weekend: .025 }[usage];
    const insulationFactor = { good: .8, average: 1, poor: 1.25 }[insulation];
    const lengthFactor = { 25: 1.1, 33: 1, 40: .94, 50: .88 }[length];
    const estimate = Math.max(1, Math.round(surface * usageFactor * insulationFactor * lengthFactor));
    const low = Math.max(1, estimate - 1); const high = estimate + 1;
    const product = PRODUCTS.find(item => item.id === `wood${length}`) || PRODUCTS.find(item => item.id === 'wood33');
    output.innerHTML = activeTranslationLanguage === 'fr'
      ? `<strong>${low} à ${high} stères par hiver</strong><br>Soit environ ${euro(product.price * estimate)} pour ${estimate} stères en ${length} cm.`
      : `<strong>Da ${low} a ${high} steri per inverno</strong><br>Circa ${euro(product.price * estimate)} per ${estimate} steri da ${length} cm.`;
    form.querySelector('[data-add-estimate]').dataset.quantity = estimate;
    form.querySelector('[data-add-estimate]').dataset.product = product.id;
  };
  form.addEventListener('input', calculate); form.addEventListener('change', calculate); calculate();
}
function setupFaq() {
  const categoryButtons = [...document.querySelectorAll('[data-faq-category]')];
  const items = [...document.querySelectorAll('[data-faq-item]')];
  if (!items.length) return;
  categoryButtons.forEach(button => button.addEventListener('click', () => { categoryButtons.forEach(item => item.classList.toggle('active', item === button)); items.forEach(item => { item.hidden = button.dataset.faqCategory !== 'tout' && item.dataset.category !== button.dataset.faqCategory; }); }));
  document.querySelectorAll('[data-faq-question]').forEach(button => button.addEventListener('click', () => { const item = button.closest('[data-faq-item]'); item.classList.toggle('open'); button.setAttribute('aria-expanded', item.classList.contains('open')); button.querySelector('span:last-child').textContent = item.classList.contains('open') ? '−' : '+'; }));
}
function setupAdviceFilters() {
  const buttons = [...document.querySelectorAll('[data-advice-filter]')];
  const cards = [...document.querySelectorAll('[data-advice]')];
  buttons.forEach(button => button.addEventListener('click', () => {
    buttons.forEach(item => item.classList.toggle('active', item === button));
    cards.forEach(card => { card.hidden = button.dataset.adviceFilter !== 'tout' && card.dataset.advice !== button.dataset.adviceFilter; });
  }));
}
function initView() {
  document.body.classList.remove('menu-open');
  document.querySelector('.main-nav')?.classList.remove('open');
  document.querySelector('.menu-toggle')?.setAttribute('aria-expanded', 'false');
  renderFeatured(); renderCatalogue(); setupLengthCalculator(); setupStereCalculator(); setupFaq(); setupAdviceFilters(); updateCartUI();
  if (activeTranslationLanguage === 'fr') translateGeneratedSubtree(document.querySelector('[data-add-estimate]'));
  document.querySelectorAll('[data-filter-category]').forEach(button => button.addEventListener('click', () => { activeCategory = button.dataset.filterCategory; history.replaceState({}, '', location.pathname); renderCatalogue(); }));
  const range = document.querySelector('[data-price-range]');
  if (range) { range.value = maxPrice; range.addEventListener('input', () => { maxPrice = Number(range.value); document.querySelector('[data-price-value]').textContent = euro(maxPrice); renderCatalogue(); }); document.querySelector('[data-price-value]').textContent = euro(maxPrice); }
  document.querySelector('[data-sort]')?.addEventListener('change', renderCatalogue);
}
async function navigate(url, { push = true } = {}) {
  const target = new URL(url, location.href);
  if (target.origin !== location.origin) return;
  const response = await fetch(target.href);
  if (!response.ok) return;
  const html = await response.text();
  const doc = translateDocument(new DOMParser().parseFromString(html, 'text/html'), activeTranslationLanguage);
  const nextView = doc.querySelector('#app');
  const currentView = document.querySelector('#app');
  if (!nextView || !currentView) return;
  currentView.innerHTML = nextView.innerHTML;
  document.body.dataset.page = doc.body.dataset.page || 'page';
  document.title = doc.title;
  activeCategory = 'tout'; maxPrice = 450;
  if (push) history.pushState({}, '', target.href);
  document.querySelectorAll('.main-nav [data-route]').forEach(link => link.classList.toggle('active', link.pathname === target.pathname));
  window.scrollTo({ top: 0, behavior: 'instant' });
  initView();
  translateDocument(document);
  applyGoogleTranslation(visitorTranslationLanguage);
}
function handleFormSubmit(form, sendVia = 'gmail') {
  const data = new FormData(form);
  const requestLines = form.hasAttribute('data-request-form') ? cartEntries().map(([id, qty]) => { const product = PRODUCTS.find(item => item.id === id); return `- ${displayProductName(product)}: ${qty} ${displayProductUnit(product)}, ${euro(product.price * qty)}`; }) : [];
  const body = [`Nome: ${data.get('name')}`, `Telefono: ${data.get('phone')}`, `E-mail: ${data.get('email') || 'non indicata'}`, `Città / CAP: ${data.get('city') || 'non indicati'}`, `Messaggio: ${data.get('message') || 'nessuno'}`, ...(requestLines.length ? ['', 'Selezione:', ...requestLines, `Totale stimato: ${euro(cartTotal())}`] : [])].join('\n');
  const subject = form.hasAttribute('data-request-form') ? 'Richiesta prodotti Bois & Braise' : 'Messaggio dal sito Bois & Braise';
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONTACT_EMAIL)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(`${subject}\n\n${body}`)}`;
  window.open(sendVia === 'whatsapp' ? whatsappUrl : gmailUrl, '_blank', 'noopener');
  let confirmation = form.parentElement.querySelector('.form-confirm');
  if (!confirmation) {
    confirmation = document.createElement('div');
    confirmation.className = 'form-confirm';
    confirmation.setAttribute('role', 'status');
    form.before(confirmation);
  }
  confirmation.innerHTML = `Richiesta preparata senza pagamento online. <a href="${gmailUrl}" target="_blank" rel="noopener">Apri Gmail</a> · <a href="${whatsappUrl}" target="_blank" rel="noopener">Apri WhatsApp</a>`;
  confirmation.classList.add('visible');
  toast(sendVia === 'whatsapp' ? 'Apertura di WhatsApp…' : 'Apertura di Gmail…');
}
document.addEventListener('click', event => {
  const anchor = event.target.closest('a[href]');
  if (anchor && !event.defaultPrevented && !event.metaKey && !event.ctrlKey && anchor.origin === location.origin && /\.html$/.test(anchor.pathname) && !anchor.hasAttribute('download')) { event.preventDefault(); navigate(anchor.href); return; }
  const add = event.target.closest('[data-add]'); if (add) { addQty(add.dataset.add); toast('Aggiunto alla richiesta'); return; }
  const quantity = event.target.closest('[data-qty-change]'); if (quantity) { changeQty(quantity.dataset.id, Number(quantity.dataset.qtyChange)); return; }
  const remove = event.target.closest('[data-remove-id]'); if (remove) { const cart = readCart(); delete cart[remove.dataset.removeId]; writeCart(cart); renderRequestLines(); renderProductQuantities(); return; }
  if (event.target.closest('[data-open-request]')) { openRequest(); return; }
  if (event.target.closest('[data-close-request]')) { closeRequest(); return; }
  if (event.target.matches('.request-overlay')) { closeRequest(); return; }
  if (event.target.closest('[data-clear-request]')) { if (cartCount() && window.confirm('Rimuovere tutti i prodotti dalla richiesta?')) { localStorage.removeItem(CART_STORAGE_KEY); updateCartUI(); renderProductQuantities(); renderRequestLines(); } return; }
  const estimateButton = event.target.closest('[data-add-estimate]'); if (estimateButton) { const product = PRODUCTS.find(item => item.id === estimateButton.dataset.product); const quantityToAdd = Number(estimateButton.dataset.quantity) || 8; if (product && !readCart()[product.id]) { const cart = readCart(); cart[product.id] = quantityToAdd; writeCart(cart); } else if (product) { const cart = readCart(); cart[product.id] += quantityToAdd; writeCart(cart); } renderProductQuantities(); renderRequestLines(); toast(`${quantityToAdd} stères ajoutés à votre demande`); return; }
  if (event.target.closest('[data-article-link]')) { const link = event.target.closest('[data-article-link]'); event.preventDefault(); navigate(link.href); }
});
document.addEventListener('submit', event => { const form = event.target.closest('[data-contact-form]'); if (form) { event.preventDefault(); if (form.reportValidity()) handleFormSubmit(form, event.submitter?.dataset.sendVia || 'gmail'); } });
document.querySelector('.menu-toggle')?.addEventListener('click', event => { const nav = document.querySelector('.main-nav'); const open = nav.classList.toggle('open'); event.currentTarget.setAttribute('aria-expanded', String(open)); });
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeRequest(); });
window.addEventListener('popstate', () => navigate(location.href, { push: false }));
initRequestUI(); initView(); translateDocument(document, activeTranslationLanguage); initLanguageTranslator();

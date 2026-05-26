// ── TRADUCCIONES i18n ──
const i18n = {
  es: {
    appName: 'UniTicket',
    login: 'Iniciar sesión',
    logout: 'Salir',
    email: 'Correo electrónico',
    password: 'Contraseña',
    role: 'Rol',
    dashboard: 'Dashboard',
    newTicket: 'Nuevo ticket',
    myTickets: 'Mis tickets',
    allTickets: 'Todos los tickets',
    location: 'Ubicación del laboratorio',
    equipmentId: 'ID del equipo',
    description: 'Descripción del problema',
    reportDate: 'Fecha de reporte',
    status: 'Estado',
    open: 'Abierto',
    inProgress: 'En progreso',
    resolved: 'Resuelto',
    reporter: 'Reportado por',
    assignedTo: 'Asignado a',
    changeStatus: 'Cambiar estado',
    addNote: 'Agregar nota de resolución',
    save: 'Guardar',
    cancel: 'Cancelar',
    total: 'Total tickets',
    openCount: 'Abiertos',
    progressCount: 'En progreso',
    resolvedCount: 'Resueltos',
    filter: 'Filtrar',
    all: 'Todos',
    search: 'Buscar...',
    noTickets: 'No hay tickets para mostrar',
    ticketCreated: 'Ticket creado exitosamente',
    ticketUpdated: 'Ticket actualizado',
    loginError: 'Correo o contraseña incorrectos',
    required: 'Este campo es obligatorio',
    technician: 'Técnico',
    standard: 'Usuario estándar',
    admin: 'Administrador',
    notifTitle: 'UniTicket — Nuevo ticket',
    notifAllow: 'Permitir notificaciones para recibir alertas',
    welcomeBack: 'Bienvenido/a de vuelta',
    dashboardSubtitle: 'Resumen de incidencias técnicas',
    viewBtn: 'Ver',
    historyCreated: 'Ticket creado por',
    historyProgress: 'Estado cambiado a En progreso — asignado a',
    historyResolved: 'Ticket resuelto por',
    descPlaceholder: 'Describe la falla con el mayor detalle posible...',
    unassigned: 'Sin asignar',
    beingManaged: 'Tu ticket está siendo gestionado. Recibirás una notificación cuando sea actualizado.',
    technicianAssigned: 'Técnico asignado',
    saveChanges: 'Guardar cambios',
  },
  en: {
    appName: 'UniTicket',
    login: 'Sign in',
    logout: 'Sign out',
    email: 'Email address',
    password: 'Password',
    role: 'Role',
    dashboard: 'Dashboard',
    newTicket: 'New ticket',
    myTickets: 'My tickets',
    allTickets: 'All tickets',
    location: 'Lab location',
    equipmentId: 'Equipment ID',
    description: 'Problem description',
    reportDate: 'Report date',
    status: 'Status',
    open: 'Open',
    inProgress: 'In progress',
    resolved: 'Resolved',
    reporter: 'Reported by',
    assignedTo: 'Assigned to',
    changeStatus: 'Change status',
    addNote: 'Add resolution note',
    save: 'Save',
    cancel: 'Cancel',
    total: 'Total tickets',
    openCount: 'Open',
    progressCount: 'In progress',
    resolvedCount: 'Resolved',
    filter: 'Filter',
    all: 'All',
    search: 'Search...',
    noTickets: 'No tickets to display',
    ticketCreated: 'Ticket created successfully',
    ticketUpdated: 'Ticket updated',
    loginError: 'Invalid email or password',
      required: 'This field is required',
    technician: 'Technician',
    standard: 'Standard user',
    admin: 'Administrator',
    notifTitle: 'UniTicket — New ticket',
    notifAllow: 'Allow notifications to receive alerts',
    welcomeBack: 'Welcome back',
    dashboardSubtitle: 'Technical incidents summary',
    viewBtn: 'View',
    historyCreated: 'Ticket created by',
    historyProgress: 'Status changed to In progress — assigned to',
    historyResolved: 'Ticket resolved by',
    descPlaceholder: 'Describe the issue in as much detail as possible...',
    unassigned: 'Unassigned',
    beingManaged: 'Your ticket is being managed. You will receive a notification when it is updated.',
    technicianAssigned: 'Assigned technician',
    saveChanges: 'Save changes',
  }
};

let currentLang = localStorage.getItem('ut_lang') || 'es';
function t(key) { return i18n[currentLang][key] || key; }
function toggleLang() {
  currentLang = currentLang === 'es' ? 'en' : 'es';
  localStorage.setItem('ut_lang', currentLang);
  applyLang();
}
function applyLang() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = t(key);
    else el.textContent = t(key);
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPh);
  });
  const btn = document.getElementById('btn-lang');
  if (btn) btn.textContent = currentLang === 'es' ? 'EN' : 'ES';
}

// ── USUARIOS DEMO ──
const USERS = [
  { id: 1, name: 'Carlos Muñoz', email: 'carlos@univalle.edu.co', password: '123456', role: 'standard' },
  { id: 2, name: 'Prof. Laura Gómez', email: 'laura@univalle.edu.co', password: '123456', role: 'standard' },
  { id: 3, name: 'Jorge Herrera', email: 'jorge@univalle.edu.co', password: 'tecnico123', role: 'technician' },
  { id: 4, name: 'Sandra Ríos', email: 'sandra@univalle.edu.co', password: 'admin123', role: 'admin' },
];

// ── USUARIOS REGISTRADOS ──
function getRegisteredUsers() {
  try { return JSON.parse(localStorage.getItem('ut_registered_users')) || []; }
  catch { return []; }
}
function saveRegisteredUsers(users) {
  localStorage.setItem('ut_registered_users', JSON.stringify(users));
}
function registerUser(name, email, password) {
  const users = getRegisteredUsers();
  if (users.find(u => u.email === email)) return { ok: false, msg: 'Este correo ya está registrado.' };
  const newUser = { id: Date.now(), name, email, password, role: 'standard' };
  users.push(newUser);
  saveRegisteredUsers(users);
  return { ok: true, user: newUser };
}
function findUser(email, password) {
  // Primero busca en usuarios demo
  const demo = USERS.find(u => u.email === email && u.password === password);
  if (demo) return demo;
  // Luego en usuarios registrados
  const registered = getRegisteredUsers().find(u => u.email === email && u.password === password);
  return registered || null;
}

// ── AUTH ──
function getSession() {
  try { return JSON.parse(localStorage.getItem('ut_session')); } catch { return null; }
}
function setSession(user) {
  localStorage.setItem('ut_session', JSON.stringify(user));
}
function clearSession() {
  localStorage.removeItem('ut_session');
}
function requireAuth(allowedRoles) {
  const session = getSession();
  if (!session) { window.location.href = '../index.html'; return null; }
  if (allowedRoles && !allowedRoles.includes(session.role)) {
    window.location.href = 'dashboard.html'; return null;
  }
  return session;
}

// ── TICKETS ──
const SAMPLE_TICKETS = [
  { id: 1, location: 'Laboratorio de Redes — Sala A', equipmentId: 'PC-03', description: 'El equipo no enciende al presionar el botón de encendido. Ya se revisó el cable de alimentación y está bien conectado.', status: 'resolved', reporterId: 1, reporterName: 'Carlos Muñoz', date: '2026-05-19', note: 'Se reemplazó la fuente de poder. Equipo operativo.', assignedTo: 'Jorge Herrera' },
  { id: 2, location: 'Sala de Software — Piso 2', equipmentId: 'PC-11', description: 'El software de diseño (AutoCAD 2024) no abre. Muestra error de licencia al iniciar.', status: 'progress', reporterId: 2, reporterName: 'Prof. Laura Gómez', date: '2026-05-21', note: '', assignedTo: 'Jorge Herrera' },
  { id: 3, location: 'Laboratorio de Electrónica', equipmentId: 'PROYECTOR-01', description: 'El proyector no muestra imagen. La laptop se conecta por HDMI pero la pantalla queda en negro.', status: 'open', reporterId: 1, reporterName: 'Carlos Muñoz', date: '2026-05-22', note: '', assignedTo: '' },
  { id: 4, location: 'Laboratorio de Redes — Sala B', equipmentId: 'SWITCH-02', description: 'El switch de red no tiene conectividad. Los equipos de la sala B no tienen acceso a internet.', status: 'open', reporterId: 2, reporterName: 'Prof. Laura Gómez', date: '2026-05-23', note: '', assignedTo: '' },
  { id: 5, location: 'Sala de Software — Piso 1', equipmentId: 'PC-07', description: 'Teclado y mouse no responden. Se probaron en otro equipo y funcionan bien, el problema es en este PC.', status: 'progress', reporterId: 1, reporterName: 'Carlos Muñoz', date: '2026-05-23', note: 'Se está revisando el puerto USB y controladores.', assignedTo: 'Jorge Herrera' },
];

function getTickets() {
  const stored = localStorage.getItem('ut_tickets');
  if (!stored) {
    localStorage.setItem('ut_tickets', JSON.stringify(SAMPLE_TICKETS));
    return SAMPLE_TICKETS;
  }
  return JSON.parse(stored);
}
function saveTickets(tickets) {
  localStorage.setItem('ut_tickets', JSON.stringify(tickets));
}
function addTicket(ticket) {
  const tickets = getTickets();
  ticket.id = Date.now();
  tickets.unshift(ticket);
  saveTickets(tickets);
  return ticket;
}
function updateTicket(id, changes) {
  const tickets = getTickets();
  const idx = tickets.findIndex(t => t.id == id);
  if (idx !== -1) { tickets[idx] = { ...tickets[idx], ...changes }; saveTickets(tickets); return tickets[idx]; }
  return null;
}
function getTicketById(id) {
  return getTickets().find(t => t.id == id) || null;
}

// ── STATUS BADGE ──
function statusBadge(status) {
  const map = {
    open:     { cls: 'badge-open',     label: t('open') },
    progress: { cls: 'badge-progress', label: t('inProgress') },
    resolved: { cls: 'badge-resolved', label: t('resolved') },
  };
  const s = map[status] || map.open;
  return `<span class="badge ${s.cls}">${s.label}</span>`;
}

// ── TOAST ──
function showToast(msg, type = '') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = msg;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3500);
}

// ── EMAILJS ──
const EMAILJS_SERVICE_ID = 'service_rz9r1we';
const EMAILJS_TEMPLATE_ID = 'template_l6xzzyn';
const EMAILJS_WELCOME_TEMPLATE_ID = 'template_c8unn8d';
const EMAILJS_PUBLIC_KEY = 'jSVsh0qTopZRu2in5';

function initEmailJS() {
  if (typeof emailjs !== 'undefined') {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }
}

function sendTicketEmail(ticket, toEmail) {
  if (typeof emailjs === 'undefined') return;
  const templateParams = {
    to_name: 'Equipo Técnico',
    to_email: toEmail || 'laurarias007@gmail.com',
    ticket_id: ticket.id,
    equipment_id: ticket.equipmentId,
    location: ticket.location,
    description: ticket.description,
    reporter_name: ticket.reporterName,
    report_date: formatDate(ticket.date),
    name: ticket.reporterName,
    email: toEmail || 'laurarias007@gmail.com',
  };
  emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
    .then(() => console.log('Correo de ticket enviado'))
    .catch(err => console.warn('Error enviando correo de ticket:', err));
}

function sendWelcomeEmail(name, email) {
  if (typeof emailjs === 'undefined') return;
  emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_WELCOME_TEMPLATE_ID, {
    to_name: name,
    to_email: email,
    name: name,
    email: email,
  })
    .then(() => console.log('Correo de bienvenida enviado'))
    .catch(err => console.warn('Error enviando bienvenida:', err));
}

// ── NOTIFICACIONES PUSH ──
async function requestNotifPermission() {
  if (!('Notification' in window)) return;
  if (Notification.permission === 'default') {
    await Notification.requestPermission();
  }
}
function sendNotification(title, body) {
  if (Notification.permission === 'granted') {
    new Notification(title, { body, icon: '../favicon.ico' });
  }
}

// ── NAVBAR ──
function renderNavbar(session) {
  const nav = document.getElementById('navbar');
  if (!nav || !session) return;
  const roleLabel = session.role === 'technician' ? t('technician') : session.role === 'admin' ? t('admin') : t('standard');
  nav.innerHTML = `
    <a href="dashboard.html" class="logo-text" aria-label="UniTicket inicio">Uni<span>Ticket</span></a>
    <nav class="nav-right" role="navigation" aria-label="Navegación principal">
      <span class="nav-user" aria-label="Usuario: ${session.name}">${session.name}</span>
      <span class="nav-role" aria-label="Rol: ${roleLabel}">${roleLabel}</span>
      <button class="btn-lang" id="btn-lang" onclick="toggleLang()" aria-label="Cambiar idioma">${currentLang === 'es' ? 'EN' : 'ES'}</button>
      <button class="btn-logout" onclick="logout()" aria-label="${t('logout')}" data-i18n="logout">${t('logout')}</button>
    </nav>
  `;
}
function logout() {
  clearSession();
  window.location.href = '../index.html';
}

// ── FORMATO FECHA ──
function formatDate(dateStr) {
  if (!dateStr) return '';
  const [y, m, d] = dateStr.split('-');
  return currentLang === 'es' ? `${d}/${m}/${y}` : `${m}/${d}/${y}`;
}

// ── SANITIZAR INPUT ──
function sanitize(str) {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

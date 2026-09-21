(function () {
  var MAX_FILES = 3;
  var MAX_BYTES = 25 * 1024 * 1024;

  var T = {
    en: {
      title: 'Code of Conduct Channel',
      intro: 'This will be a <strong>safe, confidential, and impartial</strong> space created so that all employees and subcontractors can report any situation that goes against <strong class="hl">our values</strong>, such as disrespect, harassment, discrimination, intimidation, or any other inappropriate behavior.',
      v1: 'Respect', v2: 'Safety', v3: 'Ethics', v4: 'Inclusion', v5: 'Transparency',
      soon: 'In the coming days, we will share more information about how the channel works and how to use it.',
      commitment: 'Our commitment is to maintain an increasingly respectful, ethical, safe, and transparent workplace for everyone.',
      hash: '#StrongerTogether',
      formTitle: 'Submit your report',
      formNote: 'Please complete the fields below with as much detail as possible. Your report will be received directly by our team and handled responsibly.',
      l1: 'Would you like to identify yourself?',
      optIdentify: 'I want to identify myself',
      optAnon: 'I prefer to remain anonymous',
      opt: '(optional)',
      optMax: '(optional, up to 3 files)',
      removeFile: 'Remove',
      l2: 'Your name',
      l3: 'Best contact information',
      l3h: '(Email or phone)',
      l4: 'Tell us what happened',
      l4h: 'Describe the situation with as much detail as possible: what happened, when, where, and who was involved.',
      l5: 'Is there anything else you would like to add?',
      l6: 'Date of the incident',
      l6h: '(if known)',
      l7: 'Attachments',
      l7h: 'You may upload documents, photos, or other files that may help. Accepted: DOC, DOCX, PDF, JPG, PNG, WEBP.',
      addFile: 'Add file',
      submit: 'Submit report',
      sending: 'Sending...',
      trust2: 'CONFIDENTIALITY GUARANTEED',
      trust2b: 'All information will be kept confidential. Good-faith reports will not result in retaliation.',
      trust3: 'We count on you to help us build an even better workplace together!',
      thanksTitle: 'Thank you.',
      thanksText: 'Your report was received by our team and will be handled with confidentiality and responsibility.',
      tagline: 'Doing <span>the right thing</span> is what cleans us from within.',
      errFiles: 'You can attach up to 3 files, 25 MB each.',
      errSend: 'We could not send your report. Please try again.',
      errType: 'Only DOC, DOCX, PDF, JPG, PNG or WEBP files can be attached.',
      errOffline: 'You appear to be offline. Your text is still here; reconnect and submit again.',
      errTimeout: 'The upload is taking too long. Try fewer or smaller files, then submit again.'
    },
    pt: {
      title: 'Canal de Conduta',
      intro: 'Esse será um espaço <strong>seguro, confidencial e imparcial</strong>, criado para que todos os colaboradores e subcontratados possam relatar qualquer situação que vá contra <strong class="hl">nossos valores</strong>, como desrespeito, assédio, discriminação, intimidação ou qualquer outro comportamento inadequado.',
      v1: 'Respeito', v2: 'Segurança', v3: 'Ética', v4: 'Inclusão', v5: 'Transparência',
      soon: 'Nos próximos dias compartilharemos mais informações sobre como o canal funcionará e como utilizá-lo.',
      commitment: 'Nosso compromisso é manter um ambiente de trabalho cada vez mais respeitoso, ético, seguro e transparente para todos.',
      hash: '#JuntosSomosMaisFortes',
      formTitle: 'Faça seu relato',
      formNote: 'Preencha os campos abaixo com o máximo de detalhes possível. Seu relato será recebido diretamente pela nossa equipe e tratado com responsabilidade.',
      l1: 'Deseja se identificar?',
      optIdentify: 'Quero me identificar',
      optAnon: 'Prefiro permanecer anônimo(a)',
      opt: '(opcional)',
      optMax: '(opcional, até 3 arquivos)',
      removeFile: 'Remover',
      l2: 'Seu nome',
      l3: 'Melhor contato',
      l3h: '(E-mail ou telefone)',
      l4: 'Conte-nos o que aconteceu',
      l4h: 'Descreva a situação com o máximo de detalhes possível: o que aconteceu, quando, onde e quem estava envolvido.',
      l5: 'Há algo mais que você gostaria de acrescentar?',
      l6: 'Data do ocorrido',
      l6h: '(se souber)',
      l7: 'Anexos',
      l7h: 'Você pode enviar documentos, fotos ou outros arquivos que possam ajudar. Aceitos: DOC, DOCX, PDF, JPG, PNG, WEBP.',
      addFile: 'Adicionar arquivo',
      submit: 'Enviar relato',
      sending: 'Enviando...',
      trust2: 'CONFIDENCIALIDADE GARANTIDA',
      trust2b: 'Todas as informações serão mantidas em sigilo. Relatos feitos de boa-fé não resultarão em retaliações.',
      trust3: 'Contamos com você para construirmos juntos um ambiente cada vez melhor!',
      thanksTitle: 'Obrigado.',
      thanksText: 'Seu relato foi recebido pela nossa equipe e será tratado com sigilo e responsabilidade.',
      tagline: 'Fazer <span>o certo</span> é o que nos limpa por dentro.',
      errFiles: 'Você pode anexar até 3 arquivos, de 25 MB cada.',
      errSend: 'Não foi possível enviar seu relato. Tente novamente.',
      errType: 'Só é possível anexar arquivos DOC, DOCX, PDF, JPG, PNG ou WEBP.',
      errOffline: 'Você parece estar sem internet. Seu texto continua aqui; reconecte e envie novamente.',
      errTimeout: 'O envio está demorando demais. Tente menos arquivos ou arquivos menores e envie novamente.'
    },
    es: {
      title: 'Canal de Conducta',
      intro: 'Este será un espacio <strong>seguro, confidencial e imparcial</strong>, creado para que todos los colaboradores y subcontratistas puedan reportar cualquier situación que vaya en contra de <strong class="hl">nuestros valores</strong>, como falta de respeto, acoso, discriminación, intimidación o cualquier otro comportamiento inapropiado.',
      v1: 'Respeto', v2: 'Seguridad', v3: 'Ética', v4: 'Inclusión', v5: 'Transparencia',
      soon: 'En los próximos días compartiremos más información sobre cómo funcionará el canal y cómo utilizarlo.',
      commitment: 'Nuestro compromiso es mantener un ambiente de trabajo cada vez más respetuoso, ético, seguro y transparente para todos.',
      hash: '#JuntosSomosMásFuertes',
      formTitle: 'Presenta tu reporte',
      formNote: 'Completa los campos a continuación con el mayor detalle posible. Tu reporte será recibido directamente por nuestro equipo y tratado con responsabilidad.',
      l1: '¿Deseas identificarte?',
      optIdentify: 'Quiero identificarme',
      optAnon: 'Prefiero permanecer anónimo(a)',
      opt: '(opcional)',
      optMax: '(opcional, hasta 3 archivos)',
      removeFile: 'Eliminar',
      l2: 'Tu nombre',
      l3: 'Mejor contacto',
      l3h: '(Correo o teléfono)',
      l4: 'Cuéntanos qué sucedió',
      l4h: 'Describe la situación con el mayor detalle posible: qué pasó, cuándo, dónde y quiénes estuvieron involucrados.',
      l5: '¿Hay algo más que te gustaría agregar?',
      l6: 'Fecha del hecho',
      l6h: '(si la sabes)',
      l7: 'Archivos adjuntos',
      l7h: 'Puedes subir documentos, fotos u otros archivos que puedan ayudar. Aceptados: DOC, DOCX, PDF, JPG, PNG, WEBP.',
      addFile: 'Agregar archivo',
      submit: 'Enviar reporte',
      sending: 'Enviando...',
      trust2: 'CONFIDENCIALIDAD GARANTIZADA',
      trust2b: 'Toda la información se mantendrá en estricta confidencialidad. Los reportes hechos de buena fe no resultarán en represalias.',
      trust3: 'Contamos contigo para construir juntos un ambiente cada vez mejor!',
      thanksTitle: 'Gracias.',
      thanksText: 'Tu reporte fue recibido por nuestro equipo y será tratado con confidencialidad y responsabilidad.',
      tagline: 'Hacer <span>lo correcto</span> también nos limpia por dentro.',
      errFiles: 'Puedes adjuntar hasta 3 archivos, de 25 MB cada uno.',
      errSend: 'No pudimos enviar tu reporte. Inténtalo de nuevo.',
      errType: 'Solo se pueden adjuntar archivos DOC, DOCX, PDF, JPG, PNG o WEBP.',
      errOffline: 'Parece que no tienes conexión. Tu texto sigue aquí; reconéctate y envía de nuevo.',
      errTimeout: 'El envío está tardando demasiado. Prueba con menos archivos o más pequeños y envía de nuevo.'
    }
  };

  var ALLOWED_EXT = ['doc', 'docx', 'pdf', 'jpg', 'jpeg', 'png', 'webp'];
  var TIMEOUT_MS = 90000;
  var LANG_ATTR = { en: 'en-US', pt: 'pt-BR', es: 'es' };
  var current = 'en';

  var form = document.getElementById('formConduct');
  var langField = document.getElementById('langField');
  var status = document.getElementById('formStatus');
  var thanks = document.getElementById('formThanks');
  var fieldName = document.getElementById('fieldName');
  var fieldContact = document.getElementById('fieldContact');
  var fileInput = document.getElementById('attachment');
  var fileNames = document.getElementById('fileNames');
  var submitBtn = form.querySelector('button[type="submit"]');
  var errKey = null;
  var chosen = [];
  var dateField = document.getElementById('f-date');

  // An incident cannot be in the future (local date, not UTC)
  var now = new Date();
  dateField.max = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0') + '-' + String(now.getDate()).padStart(2, '0');

  function setLang(lang) {
    current = lang;
    var t = T[lang];
    document.documentElement.lang = LANG_ATTR[lang];
    document.title = t.title + " - Orlandi's Cleaning";
    langField.value = lang;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.textContent = t[el.getAttribute('data-i18n')];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      el.innerHTML = t[el.getAttribute('data-i18n-html')];
    });
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      var on = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('active', on);
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    if (!submitBtn.disabled) submitBtn.textContent = t.submit;
    if (errKey) status.textContent = t[errKey];
    renderFiles();
  }

  function showError(key) {
    errKey = key;
    status.textContent = T[current][key];
    status.hidden = false;
    status.focus();
  }

  function clearError() {
    errKey = null;
    status.hidden = true;
  }

  function badFile(f) {
    var ext = f.name.split('.').pop().toLowerCase();
    return ALLOWED_EXT.indexOf(ext) === -1;
  }

  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () { setLang(btn.getAttribute('data-lang')); });
  });

  // Anonymous: hide and clear name/contact (remaining fields reflow)
  document.querySelectorAll('input[name="identification"]').forEach(function (radio) {
    radio.addEventListener('change', function () {
      var anon = this.value === 'Anonymous';
      fieldName.hidden = anon;
      fieldContact.hidden = anon;
      if (anon) {
        fieldName.querySelector('input').value = '';
        fieldContact.querySelector('input').value = '';
      }
    });
  });

  function fmtSize(n) {
    return n >= 1048576 ? (n / 1048576).toFixed(1) + ' MB' : Math.max(1, Math.round(n / 1024)) + ' KB';
  }

  function sync() {
    var dt = new DataTransfer();
    chosen.forEach(function (f) { dt.items.add(f); });
    fileInput.files = dt.files;
  }

  function renderFiles() {
    fileNames.textContent = '';
    chosen.forEach(function (f, i) {
      var li = document.createElement('li');
      var name = document.createElement('span');
      name.className = 'fname';
      name.textContent = f.name;
      var size = document.createElement('span');
      size.className = 'fsize';
      size.textContent = fmtSize(f.size);
      var rm = document.createElement('button');
      rm.type = 'button';
      rm.textContent = '×';
      rm.setAttribute('aria-label', T[current].removeFile + ': ' + f.name);
      rm.addEventListener('click', function () {
        chosen.splice(i, 1);
        sync();
        renderFiles();
        clearError();
      });
      li.appendChild(name);
      li.appendChild(size);
      li.appendChild(rm);
      fileNames.appendChild(li);
    });
  }

  // Each pick adds to the list (up to MAX_FILES) instead of replacing it
  fileInput.addEventListener('change', function () {
    clearError();
    var picked = Array.prototype.slice.call(fileInput.files);
    var problem = null;
    picked.forEach(function (f) {
      var dup = chosen.some(function (c) { return c.name === f.name && c.size === f.size && c.lastModified === f.lastModified; });
      if (dup) return;
      if (badFile(f)) { problem = 'errType'; return; }
      if (f.size > MAX_BYTES || chosen.length >= MAX_FILES) { problem = 'errFiles'; return; }
      chosen.push(f);
    });
    sync();
    renderFiles();
    if (problem) showError(problem);
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (submitBtn.disabled) return;
    clearError();

    var files = chosen.slice();
    if (files.some(badFile)) { showError('errType'); return; }
    if (files.length > MAX_FILES || files.some(function (f) { return f.size > MAX_BYTES; })) { showError('errFiles'); return; }
    if (navigator.onLine === false) { showError('errOffline'); return; }

    submitBtn.disabled = true;
    submitBtn.textContent = T[current].sending;

    var ctrl = new AbortController();
    var timer = setTimeout(function () { ctrl.abort(); }, TIMEOUT_MS);

    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' },
      signal: ctrl.signal
    })
      .then(function (res) {
        if (res.ok) {
          form.reset();
          langField.value = current;
          fieldName.hidden = false;
          fieldContact.hidden = false;
          chosen = [];
          renderFiles();
          form.hidden = true;
          thanks.hidden = false;
          var calm = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
          thanks.scrollIntoView({ behavior: calm ? 'auto' : 'smooth', block: 'center' });
          thanks.focus({ preventScroll: true });
        } else {
          showError(res.status === 413 ? 'errFiles' : 'errSend');
        }
      })
      .catch(function (err) {
        showError(err && err.name === 'AbortError' ? 'errTimeout' : (navigator.onLine === false ? 'errOffline' : 'errSend'));
      })
      .finally(function () {
        clearTimeout(timer);
        submitBtn.disabled = false;
        submitBtn.textContent = T[current].submit;
      });
  });

  setLang('en');
})();

(function () {
  function byId(id) { return document.getElementById(id); }
  function make(tag, text, className) {
    var node = document.createElement(tag);
    if (text) { node.textContent = text; }
    if (className) { node.className = className; }
    return node;
  }
  function link(text, href, className, external) {
    var a = make("a", text, className);
    a.href = href;
    if (external) { a.target = "_blank"; a.rel = "noopener"; }
    return a;
  }
  function has(list) { return list && list.length > 0; }
  function digits(value) { return (value || "").replace(/[^0-9+]/g, ""); }

  var s = site;
  var c = s.contact || {};
  var navItems = [];

  document.title = s.name;
  var meta = document.querySelector('meta[name="description"]');
  if (meta) { meta.setAttribute("content", s.description || ""); }

  // Top preview bar
  if (s.preview && s.preview.show) {
    var bar = byId("preview");
    bar.appendChild(document.createTextNode(s.preview.text + " "));
    if (s.preview.linkText) { bar.appendChild(link(s.preview.linkText, s.preview.linkUrl)); }
    bar.hidden = false;
  }

  // Logo
  var logo = byId("logo");
  logo.href = "#top";
  if (s.logoImage) {
    var img = make("img");
    img.src = s.logoImage;
    img.alt = s.name;
    logo.appendChild(img);
  } else {
    logo.textContent = s.name;
  }

  // Hero
  var h = s.hero || {};
  byId("heroHeadline").textContent = h.headline || s.name;
  byId("heroText").textContent = h.text || "";
  if (h.image) {
    byId("hero").style.backgroundImage = "linear-gradient(rgba(15,42,71,0.72), rgba(15,42,71,0.72)), url('" + h.image + "')";
  }
  var heroActions = byId("heroActions");
  if (c.phone && h.primaryButton) {
    heroActions.appendChild(link(h.primaryButton, "tel:" + digits(c.phone), "btn"));
  } else if (c.email && h.primaryButton) {
    heroActions.appendChild(link(h.primaryButton, "mailto:" + c.email, "btn"));
  }
  if (c.whatsapp && h.secondaryButton) {
    heroActions.appendChild(link(h.secondaryButton, "https://wa.me/" + digits(c.whatsapp), "btn ghost", true));
  }

  // About
  var a = s.about;
  if (a && has(a.text)) {
    byId("aboutTitle").textContent = a.title;
    a.text.forEach(function (para) { byId("aboutText").appendChild(make("p", para)); });
    if (a.image) {
      var pic = byId("aboutImage");
      pic.src = a.image;
      pic.alt = s.name;
      pic.hidden = false;
    }
    byId("about").hidden = false;
    navItems.push(["about", a.nav || "About"]);
  }

  // Services and Why us share the same layout
  function fillItems(key, listId) {
    var section = s[key];
    if (!section || !has(section.items)) { return; }
    byId(key + "Title").textContent = section.title;
    section.items.forEach(function (item) {
      var box = make("div");
      box.appendChild(make("h3", item.title));
      if (item.text) { box.appendChild(make("p", item.text)); }
      byId(listId).appendChild(box);
    });
    byId(key).hidden = false;
    navItems.push([key, section.nav || section.title]);
  }
  fillItems("services", "serviceList");
  fillItems("why", "whyList");

  // Contact
  byId("contactTitle").textContent = c.title || "Contact";
  byId("contactText").textContent = c.text || "";
  var details = byId("contactDetails");
  function detail(label, node) {
    var li = make("li");
    li.appendChild(make("span", label));
    li.appendChild(node);
    details.appendChild(li);
  }
  if (c.phone) { detail("Phone", link(c.phone, "tel:" + digits(c.phone))); }
  if (c.whatsapp) { detail("WhatsApp", link("Message us", "https://wa.me/" + digits(c.whatsapp), "", true)); }
  if (c.email) { detail("Email", link(c.email, "mailto:" + c.email)); }
  if (c.address) {
    var place = make("span", c.address);
    place.style.minWidth = "0";
    place.style.fontWeight = "400";
    var holder = make("div");
    holder.style.display = "inline";
    holder.appendChild(place);
    if (c.mapUrl) {
      holder.appendChild(document.createTextNode(" "));
      holder.appendChild(link("Get directions", c.mapUrl, "", true));
    }
    detail("Address", holder);
  }
  if (has(c.hours)) {
    c.hours.forEach(function (row) {
      var li = make("li");
      li.appendChild(make("span", row[0]));
      li.appendChild(make("span", row[1]));
      byId("hoursList").appendChild(li);
    });
    byId("hoursBox").hidden = false;
  }
  navItems.push(["contact", c.nav || "Contact"]);

  // Menu
  var nav = byId("nav");
  navItems.forEach(function (item) {
    var l = link(item[1], "#" + item[0]);
    l.addEventListener("click", function () {
      nav.classList.remove("open");
      byId("menuBtn").setAttribute("aria-expanded", "false");
    });
    nav.appendChild(l);
  });
  byId("menuBtn").addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    this.setAttribute("aria-expanded", open ? "true" : "false");
  });

  // Footer
  byId("footerName").textContent = "© " + new Date().getFullYear() + " " + s.name;
  var social = byId("social");
  if (s.social && s.social.facebook) { social.appendChild(link("Facebook", s.social.facebook, "", true)); }
  if (s.social && s.social.instagram) { social.appendChild(link("Instagram", s.social.instagram, "", true)); }
  var credit = byId("credit");
  if (s.credit && s.credit.text) {
    if (s.credit.url) { credit.appendChild(link(s.credit.text, s.credit.url, "", true)); }
    else { credit.textContent = s.credit.text; }
  }
})();

function applyText(id, value) {
  var el = document.getElementById(id);
  if (el && value) el.textContent = value;
}

fetch("content/site.json")
  .then(function (res) { return res.json(); })
  .then(function (data) {
    applyText("hero-line1", data.hero_line1);
    applyText("hero-line2", data.hero_line2);
    applyText("hero-text", data.hero_text);
    applyText("why-heading", data.why_heading);
    applyText("why-text", data.why_text);
    applyText("why1-title", data.why1_title);
    applyText("why1-text", data.why1_text);
    applyText("why2-title", data.why2_title);
    applyText("why2-text", data.why2_text);
    applyText("why3-title", data.why3_title);
    applyText("why3-text", data.why3_text);
    applyText("pricing-heading", data.pricing_heading);
    applyText("pricing-text", data.pricing_text);
    applyText("cta-heading", data.cta_heading);
    applyText("cta-text", data.cta_text);
  })
  .catch(function () {});

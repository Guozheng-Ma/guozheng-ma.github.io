<h1 id="publications"></h1>
<h2 style="margin: 30px 0px 10px;">Selected Publications <temp style="font-size:15px;">[</temp><a href="https://scholar.google.com/citations?user=jDvVglUAAAAJ" target="_blank" style="font-size:15px;">Google Scholar</a><temp style="font-size:15px;">]</temp></h2>
<style>
  .pub-row {
    display: flex;
    align-items: flex-start;
  }
  .pub-row .col-sm-3 {
    margin-top: 5px; 
  }
  .kai-font {
    font-family: KaiTi, "楷体", STKaiti, "华文楷体", serif;
  }
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 20px;
    padding: 0 10px;
    font-size: 12px;
    font-weight: 500;
    text-decoration: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #f8f9fa;
    color: #333;
    transition: all 0.2s ease-in-out;
  }
  .btn:hover {
    background-color: #e9ecef;
  }
  .btn.kai-font {
    font-size: 11px;
  }
</style>
<div class="publications">
  <ol class="bibliography">
    {% for link in site.data.publications.main %}
    <li>
      <div class="pub-row">
        <div class="col-sm-3 abbr" style="position: relative;padding-right: 15px;padding-left: 15px;">
          <img src="{{ link.image }}" class="teaser img-fluid z-depth-1" style="width=100;height=40%">
          <abbr class="badge">{{ link.conference_short }}</abbr>
        </div>
        <div class="col-sm-9" style="position: relative;padding-right: 15px;padding-left: 20px;">
          <div class="title"><a href="{{ link.pdf }}">{{ link.title }}</a></div>
          <div class="author">{{ link.authors }}</div>
          <div class="periodical"><em>{{ link.conference }}</em></div>
          <div class="links">
            {% if link.pdf %}
            <a href="{{ link.pdf }}" class="btn" role="button" target="_blank">PDF</a>
            {% endif %}
            {% if link.code %}
            <a href="{{ link.code }}" class="btn" role="button" target="_blank">Code</a>
            {% endif %}
            {% if link.page %}
            <a href="{{ link.page }}" class="btn" role="button" target="_blank">Project Page</a>
            {% endif %}
            {% if link.机器之心 %}
            <a href="{{ link.jiqizhixin }}" class="btn kai-font" role="button" target="_blank">机器之心</a>
            {% endif %}
            {% if link.bibtex %}
            <a href="{{ link.bibtex }}" class="btn" role="button" target="_blank">BibTex</a>
            {% endif %}
            {% if link.notes %}
            <strong> <i style="color:#e74d3c">{{ link.notes }}</i></strong>
            {% endif %}
            {% if link.others %}
            {{ link.others }}
            {% endif %}
          </div>
        </div>
      </div>
    </li>
    <br>
    {% endfor %}
  </ol>
</div>

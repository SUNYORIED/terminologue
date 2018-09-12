Screenful.Facetor.panes=[{
  render: function(div){
    var $inme=$(div);

    $inme.append(`<div class="title">Status</div>`);
    var $select=$(`<select class="fullwidth" id="facCStatus"></select>`).appendTo($inme);
    $select.append(`<option value="">(any checking status)</option>`);
    $select.append(`<option value="1">checked</option>`);
    $select.append(`<option value="0">unchecked</option>`);
    $select.on("change", Screenful.Facetor.change);

    var $select=$(`<select class="fullwidth" id="facPStatus"></select>`).appendTo($inme);
    $select.append(`<option value="">(any publishing status)</option>`);
    $select.append(`<option value="1">public</option>`);
    $select.append(`<option value="0">hidden</option>`);
    $select.on("change", Screenful.Facetor.change);

    $inme.append(`<div class="title">Domain</div>`);
    var $select=$(`<select class="fullwidth" id="facSuperdomain"></select>`).appendTo($inme);
    $select.append(`<option value="">(any domain or no domain)</option>`);
    $select.append(`<option value="*">(any domain)</option>`);
    $select.append(`<option value="-1">(no domain)</option>`);
    termbaseMetadata.domain.map(datum => {
      var $option=$(`<option value="${datum.id}">${Spec.title(datum.title)}</option>`);
      $option.data("datum", datum);
      $option.appendTo($select);
    });
    $select.on("change", Screenful.Facetor.change);
    $select.on("change", function(){
        var superdomain=$("#facSuperdomain option:selected").data("datum");
        var $subselect=$("#facSubdomain").html("");
        if(!superdomain || superdomain.subdomains.length==0){
          $("#facSubdomainContainer").hide();
          $subselect.append(`<option value="">(any subdomain or no subdomain)</option>`);
        } else {
          $("#facSubdomainContainer").show();
          $subselect.append(`<option value="">(any subdomain or no subdomain)</option>`);
          $subselect.append(`<option value="*">(any subdomain)</option>`);
          $subselect.append(`<option value="-1">(no subdomain)</option>`);
          superdomain.subdomains.map(subdomain => {
            go(subdomain, "");
          });
          function go(datum, prefix){
            var title=prefix;
            if(title!="") title+=" » ";
            title+=Spec.title(datum.title);
            $subselect.append(`<option value="${datum.lid}">${title}</option>`);
            if(datum.subdomains) datum.subdomains.map(subdomain => {
              go(subdomain, title);
            });
          }
        }
    });

    var $container=$(`<div id="facSubdomainContainer" style="display: none"></div>`).appendTo($inme);
    $container.append(`<div class="subtitle">Subdomain</div>`);
    var $select=$(`<select class="fullwidth" id="facSubdomain"></select>`).appendTo($container);
    $select.append(`<option value="">(any subdomain or no subdomain)</option>`);
    $select.on("change", Screenful.Facetor.change);
  },
  harvest: function(div){
    var $inme=$(div);
    var ret={};
    ret.cStatus=$("#facCStatus").val();
    ret.pStatus=$("#facPStatus").val();
    ret.superdomain=$("#facSuperdomain").val();
    ret.subdomain=$("#facSubdomain").val();
    return ret;
  },
}];

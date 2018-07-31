function Log(list)
{
  this.list = list;
  this.term = this.list.term ? this.list.term.capitalize() : '';
  this.name = this.list.name;
  this.text = this.list.text;
  this.time = this.list.date ? new Desamber(this.list.date) : null;

  this.code = this.list.code;
  this.rune = this.code.substr(0,1);
  this.sector = ["misc","audio","visual","research","misc"][parseInt(this.code.substr(1,1))]
  this.vector = parseInt(this.code.substr(2,1)) > 0 ? parseInt(this.code.substr(2,1)) : 0;
  this.value  = parseInt(this.code.substr(3,1)) > 0 ? parseInt(this.code.substr(3,1)) : 0;
  this.task   = make_task(parseInt(this.code.substr(1,1)),this.vector)
  
  this.photo = this.list.pict ? parseInt(this.list.pict) : null;

  this.is_featured = this.photo && (this.rune == "!" || this.rune == "+");
  this.is_event = this.rune == "+" || this.vector > 9;

  this.host = null; // From Ø('map')

  function make_task(sector,vector)
  {
    var collection = [
      ["idle", "listening" , "experiment" , "rehersal"      , "draft"     , "composition" , "sound design", "mastering" , "release" , "performance" ],
      ["idle", "watching"  , "experiment" , "storyboard"    , "prototype" , "editing"     , "design"      , "rendering" , "release" , "showcase" ],
      ["idle", "research"  , "experiment" , "documentation" , "planning"  , "maintenance" , "tooling"     , "updating"  , "release" , "talk" ]
    ]
    return collection[sector-1] && collection[sector-1][vector] ? collection[sector-1][vector] : "travel"
  }
}
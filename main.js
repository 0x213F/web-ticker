function Position() {
  this.val            = undefined;
  this.next           = null;
  this.nextnext       = null;
  this.prev           = null;
  this.prevprev       = null;
}

function Word() {
  this.Position       = undefined;
  this.next           = null;
}

function init_ticker(dic, id, speed) {

  // init the string
  var s = new Position();

  // init the first char
  var c = s;
  c.next = new Position();
  var p = undefined, pp = undefined, n = s, nn = s.next;

  // complete circular linked list
  for(var x=0 ; x<dic.length ; x++) {
    c.nextnext = new Position();
    c.next.next = c.nextnext;
    c.val = dic.charAt(x);
    c.prevprev = pp;
    c.prev = p;
    pp = p;
    p = c;
    c = c.next;
  }
  n.prev = p;
  n.prevprev = pp;
  nn.prevprev = p;
  pp.nextnext = n;
  p.next = n;
  p.nextnext = nn;

  // define the string
  var word = new Word();
  word.position = s;
  var len = document.getElementById(id).innerHTML;
  for(var x=0 ; x<len.length ; x++) {
    console.log(len.charAt(x));
  }

 }

/////////////////////////////////////////////////////////

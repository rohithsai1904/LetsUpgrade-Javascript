let pro=[ 
{
	name:"Batbike",
	cost: 1800,
	size: "",
	des: "for 3-9 ages",
	img: "batbike.jpg",
},
{
	name:"Batundie(Pack of 3)",
	cost: 600,
	size:"S|M|L",
	des: "black and yellow coloured",
	img:"batundie.jpg",
},
{
	name:"Batjacket",
	cost: 800,
	size:"M|XL",
	des: "polyester jacket",
	img: "batjacket.jpg",
},
{
	name:"Batmug",
	cost: 499,
	size:"200ml",
	des: "borosil handle",
	img:"batmug.jpg",
},
{
	name:"Batbag",
	cost: 900,
	size:"S|M",
	des: "21lires and 32 litres",
	img:"batbag.jpg",
},
{
	name:"Batspinner",
	cost: 600,
	size: "",
	des: "Metal Spinner",
	img:"batspinner.jpg",
},
{
	name:"Denver Batperfume",
	cost: 1800,
	size: "",
	des: "choco flavoured",
	img:"batscent.jpg",
},
{
	name:"Batcap",
	cost: 200,
	size:"S|M|L",
	des: "hard cotton cap",
	img:"batcap.jpg",
},
{
	name:"Batshoes",
	cost: 1800,
	size: "M",
	des: "sneakers",
	img: "batshoes.jpg",
},
{
	name:"Batlight",
	cost: 16000,
	size: "",
	des: "Led light|chargeable|5000A",
	img: "batlight.jpg",
},
 ];


function disp(pro)
{
	let data = "";
 
    for(let i=0;i<pro.length;i++)
	{
	   let r =
	   `<div class="product">
	   <div class="prodimg">
	   <img  src="${pro[i].img}" width="100%"/>
	   </div></hr>
       <h3 style="color: yellow;">Name:${pro[i].name}</h3>
	    <p>Cost: ${pro[i].cost}</p>
		<p >Size:${pro[i].size}</p>
		<p>Description:${pro[i].des}</p>
		<button style="color:yellow; padding:5px; margin:6px;" class="add" onclick="add(${i})">ADD TO CART</button>
	   </div>	   
	   `;
	  data+=r;
	  
	}
	 document.getElementById("productwrapper").innerHTML = data;
}
disp(pro);

function search(val)
{
	disp(
	   pro.filter(
	      function(pro,i)
	      {
			  let k=pro.name+""+pro.des;
			  return k.toUpperCase().indexOf(val.toUpperCase())!=-1
		  }
	   
	   
	   )
	)
}
let cart=[];

function add (i)
{	
	cart.push(pro[i]);
	document.getElementsByClassName("add")[i].innerHTML="ADDED TO CART";
	
}

function filterprice()
{
	
	min=document.getElementById("min").value;
	max=document.getElementById("max").value;
	
	disp(
	pro.filter
	(
	  function(pro,i)
	  {
		  return (pro.cost)>=min && pro.cost<=max!=-1;
	  }
	)
	)
	
}


onRealLoadCallbacks.push(function() {
    
    document.getElementById("ed4_title").addEventListener("click", function() {
        smooth_scroll_to(document.body, document.getElementById("welcome").offsetHeight, 900)
    })
    
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.y = 110;
    camera.rotation.x = -0.15;
    var renderer = new THREE.WebGLRenderer();
    var welcomeObj = document.querySelector('#welcome welcome');
    renderer.setSize( welcomeObj.offsetWidth, Math.max(welcomeObj.offsetHeight,300) );
    welcomeObj.appendChild( renderer.domElement );
    
    function ground() {
        return {
            init:function(scene,size) {
                this.geometry = new THREE.BoxGeometry( 200, 200, 200 );
                this.material = new THREE.MeshBasicMaterial( {
                    color: 0xff0000,
                    wireframe: true,
                    opacity: .1} );
                
                var xPos = size*-100;
                var zPos = size*-100;
                for (var i=0; i<size; i++) {
                    for (var j=0; j<size; j++) {
                        zPos += 200;
                        mesh = new THREE.Mesh( this.geometry, this.material );
                        mesh.position.x = xPos;
                        mesh.position.z = zPos;
                        scene.add( mesh );
                        
                    }
                    zPos = size*-100;
                    xPos += 200;
                }
            }
        }
    }

    var ground = ground();
    ground.init(scene,30);
    
    function draw() {
        requestAnimationFrame( draw );
        
        camera.position.z -= 2;
        if (camera.position.z < -200) {
            camera.position.z = 0;
        }
        
        
        if (window.scrollY < Math.max(welcomeObj.offsetHeight,300) ) {
            console.log("draw")
            // movingCamera.update();
            
            renderer.render( scene, camera );
        }
    }
    draw();
    
    
})

function createMat(scene)
{
 var mat = new BABYLON.StandardMaterial("material", scene);

 //  scene.ambientColor = new BABYLON.Color3(1, 1, 1);
 // mat.diffuseColor = new BABYLON.Color3(1, 0, 0);
 // mat.specularColor = new BABYLON.Color3(0, 1, 0);
 mat.diffuseColor = new BABYLON.Color3(204 ,0 ,0);
 mat.specularColor = new BABYLON.Color3(0, 1, 0);
 mat.specularPower = 105;
//  mat.emissiveColor = new BABYLON.Color3(0.2, 0.2, 0.2);
 mat.ambientColor = new BABYLON.Color3(0.23, 0.98, 0.53);

 //Transparency
 mat.alpha = 0.85;

 return mat;
}

function createMat2(scene)
{
 var mat2 = new BABYLON.StandardMaterial("material2", scene);

 mat2.diffuseColor = new BABYLON.Color3(0, 0, 0);
 mat2.specularColor = new BABYLON.Color3(0, 1, 0);
 mat2.specularPower = 105;
 mat2.ambientColor = new BABYLON.Color3(0.23, 0.98, 0.53);

 //Transparency
 mat2.alpha = 0.95;

 return mat2;
}

function CreateGround(scene)
{
 var mat = new BABYLON.StandardMaterial("groundMaterial", scene);

 mat.diffuseColor = new BABYLON.Color3(0, 153, 0);

 mat.specularColor = new BABYLON.Color3(1, 1, 0);

 mat.alpha = 1;

 return mat;
}

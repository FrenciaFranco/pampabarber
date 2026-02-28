import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { ComponentProps, useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { GLTF } from "three-stdlib";

type ActionName = "Inner|InnerAction";

interface GLTFAction extends THREE.AnimationClip {
  name: ActionName;
}

type GLTFResult = GLTF & {
  nodes: {
    Inner_Inner_Mat_0: THREE.Mesh;
    Ouiter_Metal12_0: THREE.Mesh;
    Ouiter_Easy_Glass_0: THREE.Mesh;
    Ouiter_Light_Top_0: THREE.Mesh;
  };
  animations: GLTFAction[];
};

function createInnerStripeTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    return null;
  }

  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.save();
  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.rotate(-Math.PI / 4);
  ctx.translate(-canvas.width / 2, -canvas.height / 2);

  const stripeWidth = 110;
  const stripeGap = 140;

  ctx.fillStyle = "#111111";
  for (let x = -canvas.width; x < canvas.width * 2; x += stripeWidth + stripeGap) {
    ctx.fillRect(x, -canvas.height, stripeWidth, canvas.height * 3);
  }

  ctx.restore();

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(2, 3);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;

  return texture;
}

export function BarbersPoleModel(props: ComponentProps<"group">) {
  const group = useRef<THREE.Group>(null);
  const { nodes, animations } = useGLTF("/barbers_pole.glb") as unknown as GLTFResult;
  const { actions } = useAnimations(animations, group);

  const innerStripeTexture = useMemo(() => createInnerStripeTexture(), []);

  const innerMaterial = useMemo(() => {
    const mat = new THREE.MeshStandardMaterial({
      color: "#ffffff",
      map: innerStripeTexture ?? undefined,
      roughness: 0.12,
      metalness: 0.1,
      emissive: "#ffffff",
      emissiveIntensity: 0.2,
    });

    return mat;
  }, [innerStripeTexture]);

  const metalMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#e4e8ef",
        roughness: 0.16,
        metalness: 0.92,
      }),
    []
  );

  const glassMaterial = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: "#f5fbff",
        transmission: 1,
        transparent: true,
        opacity: 0.22,
        roughness: 0.02,
        metalness: 0,
        thickness: 0.8,
        clearcoat: 1,
        clearcoatRoughness: 0,
      }),
    []
  );

  const capMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#f6f7fb",
        roughness: 0.2,
        metalness: 0.75,
        emissive: "#ffffff",
        emissiveIntensity: 0.06,
      }),
    []
  );

  useEffect(() => {
    const action = actions["Inner|InnerAction"];
    action?.reset().setLoop(THREE.LoopRepeat, Infinity).fadeIn(0.2).play();

    return () => {
      action?.fadeOut(0.2).stop();
    };
  }, [actions]);

  useFrame(({ clock }, delta) => {
    if (innerStripeTexture) {
      innerStripeTexture.offset.y -= delta * 0.12;
      innerStripeTexture.offset.x += delta * 0.04;
    }

    const pulse = 0.24 + Math.sin(clock.elapsedTime * 2.2) * 0.07;
    capMaterial.emissiveIntensity = pulse;
  });

  useEffect(() => {
    return () => {
      innerStripeTexture?.dispose();
      innerMaterial.dispose();
      metalMaterial.dispose();
      glassMaterial.dispose();
      capMaterial.dispose();
    };
  }, [capMaterial, glassMaterial, innerMaterial, innerStripeTexture, metalMaterial]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group>
            <group>
              <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh geometry={nodes.Inner_Inner_Mat_0.geometry} material={innerMaterial} />
              </group>
              <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh geometry={nodes.Ouiter_Metal12_0.geometry} material={metalMaterial} />
                <mesh geometry={nodes.Ouiter_Easy_Glass_0.geometry} material={glassMaterial} />
                <mesh geometry={nodes.Ouiter_Light_Top_0.geometry} material={capMaterial} />
                <pointLight position={[0, 0.5, 0]} intensity={1.25} distance={1.7} color="#ffffff" />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/barbers_pole.glb");

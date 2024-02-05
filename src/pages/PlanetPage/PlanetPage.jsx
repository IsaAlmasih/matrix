import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import VerdictList from "../../components/VerdictList/VerdictList";
import CommandmentsList from "../../components/CommandmentsList/CommandmentsList";
import { Link } from "react-router-dom";
import { staticLinks } from "../../config/routingsLinks";

const PlanetPage = () => {
  const verdictArr = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
  ];
  // const planetRef = useRef(null);

  // useEffect(() => {
  //   const scene = new THREE.Scene();
  //
  //   const camera = new THREE.PerspectiveCamera(
  //     75,
  //     window.innerWidth / window.innerHeight,
  //     0.1,
  //     1000
  //   );
  //
  //   const renderer = new THREE.WebGLRenderer();
  //   renderer.setSize(window.innerWidth, window.innerHeight);
  //
  //   const planetElement = planetRef.current;
  //   planetElement.appendChild(renderer.domElement);
  //
  //   const RADIUS_SPHERE = 3;
  //   const geometry = new THREE.SphereGeometry(RADIUS_SPHERE, 100, 100);
  //   let material = new THREE.MeshPhongMaterial();
  //   material.map = new THREE.TextureLoader().load(
  //     `./shar1.png`
  //   );
  //   material.map.source.data = `./shar1.png`
  //   console.log(material.map)
  //   const sphere = new THREE.Mesh(geometry, material);
  //
  //   const light = new THREE.DirectionalLight(0xffffff);
  //   light.position.set(0, 0, 1).normalize();
  //   scene.add(light);
  //   scene.add(sphere);
  //
  //   let d1 = 10;
  //   camera.position.z = d1;
  //
  //   const render = function () {
  //     requestAnimationFrame(render);
  //
  //     sphere.rotation.y += (1 / 16) * 0.01;
  //     sphere.rotation.x += (1 / 16) * 0.002;
  //
  //     renderer.render(scene, camera);
  //   };
  //
  //   render();
  //
  //   window.addEventListener(
  //     "click",
  //     function (e) {
  //       const lat = 90 - (Math.acos(e.clientY / RADIUS_SPHERE) * 180) / Math.PI;
  //       const lon =
  //         ((270 + (Math.atan2(e.clientX, camera.position.z) * 180) / Math.PI) %
  //           360) -
  //         180;
  //
  //       const onWheel = (e) => {
  //         e = e || window.event;
  //
  //         const delta = e.deltaY || e.detail || e.wheelDelta;
  //
  //         if (delta > d1) {
  //           d1 = d1 - 0.1;
  //           sphere.position.z -= 0.1;
  //         } else {
  //           d1 = d1 + 0.1;
  //           sphere.position.z += 0.1;
  //         }
  //
  //         e.preventDefault ? e.preventDefault() : (e.returnValue = false);
  //       };
  //
  //       if (document.addEventListener) {
  //         if ("onwheel" in document) {
  //           document.addEventListener("wheel", onWheel);
  //         } else if ("onmousewheel" in document) {
  //           document.addEventListener("mousewheel", onWheel);
  //         } else {
  //           document.addEventListener("MozMousePixelScroll", onWheel);
  //         }
  //       } else {
  //         document.attachEvent("onmousewheel", onWheel);
  //       }
  //     },
  //     false
  //   );
  //
  //   return () => {
  //     planetElement.removeChild(renderer.domElement);
  //   };
  // }, []);
  return (
    <>
      <div>
        <div className="main-content">
          <div className="attention">
            <Link to="/" className="login">
              <p className="blink back">Остаться в мире</p>
            </Link>
          </div>
          <div className="attention">
            <Link to="/login" className="login">
              <p className="blink">Войти в матрицу</p>
            </Link>
          </div>
          <div className="attention">
            <Link to={staticLinks.study} className="login">
              <p className="blink">На сайт</p>
            </Link>
          </div>
        </div>
        {/*<div id="planet" ref={planetRef}></div>*/}
        <VerdictList verdict={verdictArr}></VerdictList>
        <CommandmentsList commandments={verdictArr}></CommandmentsList>
      </div>
    </>
  );
};

export default PlanetPage;

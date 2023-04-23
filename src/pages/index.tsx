import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Text } from "@mantine/core";
import classes from "../components/landing/header.module.css";
import Welcome from "@/components/home/welcome";

export default function Home() {
  return (
    <>
      <Welcome />
    </>
  );
}

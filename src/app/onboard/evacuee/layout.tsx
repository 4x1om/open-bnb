import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "Evacuee Onboard | OpenBnB",
};

export default function EvacueeOnboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}

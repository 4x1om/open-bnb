import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "Host Onboard | OpenBnB",
};

export default function HostOnboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}

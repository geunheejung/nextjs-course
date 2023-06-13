"use client";

import { useRouter, useParams, usePathname } from "next/navigation";

const AboutDetail = (props: any) => {
  const router = useRouter();
  const params = useParams();
  const pathName = usePathname();

  console.log(router);
  console.log(params, pathName);
  return <div>Detail Page</div>;
};

export default AboutDetail;

import Link from "next/link";
import fetch from 'isomorphic-unfetch';
import { NextPage } from "next";

interface Show { id: string, name: string };
type Props = { shows: [Show] };

const Index: NextPage<Props> = props => (
    <div>
        This is a placeholder page.  Soon, you will see a better placeholder :) The future site here will be a personal finance app called Envlope
    </div>
);

export default Index;

import { ExampleBase } from '../ExampleBase';

import TableInstance from './index';

import { TableIcon } from '@radix-ui/react-icons';

export const TableViewInstance = () => <TableInstance /> 

const ExampleTables = () => (
    <ExampleBase
        heading={'Table'}
        description={'Table description here'}
        icon={<TableIcon />}
        component={<TableInstance />}
        controls={[]}
    />
);

export default ExampleTables
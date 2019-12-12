define({"topics" : [{"title":"Application stack specifications","href":"oxy_ex-1\/Reference\/application_stack_0.html","attributes": {"data-id":"application_stack_0",},"menu": {"hasChildren":false,},"tocID":"application_stack_0-d62e724","topics":[]},{"title":"Gateway server","href":"oxy_ex-1\/Reference\/gateway_server.html","attributes": {"data-id":"gateway_server",},"menu": {"hasChildren":false,},"tocID":"gateway_server-d62e732","topics":[]},{"title":"DataServer - Classic","shortdesc":"<p class=\"shortdesc\">The general size limits for a data server are 150         million objects or 500 defined volumes, whichever limit is reached first. Assuming an         average object size of 200 KB equals about 30 TB of managed storage across 30 volumes of 5         million objects each, the index storage requirement for metadata on ~30 TB of storage that         contains uncompressed general office documents is ~330 GB (11 GB per TB). Add 100 GB per TB         of managed storage for full-text or snippet index.</p>","href":"oxy_ex-1\/Reference\/dataserver___classic.html","attributes": {"data-id":"dataserver___classic",},"menu": {"hasChildren":false,},"tocID":"dataserver___classic-d62e747","topics":[]},{"title":"DataServer - Distributed","shortdesc":"<p class=\"shortdesc\">If you deploy this type of data server, you must also deploy an <a href=\"oxy_ex-1\/glossary\/elasticsearch_cluster.html#elasticsearch_cluster\" title=\"The Elasticsearch cluster attached to a data server of the type DataServer - Distributed provides a single data store for all metadata and content of harvested objects. Indexed data is distributed automatically across the nodes in the cluster. Indexing and queries are load-balanced across all nodes. Nodes can be added dynamically without downtime and the indexing process can use these newly added nodes without further setup.\"><dfn class=\"term abbreviated-form\">Elasticsearch cluster</dfn></a> with at least one node. If you deploy a cluster with         more nodes, each of the Elasticsearch nodes must meet the listed requirements.</p>","href":"oxy_ex-1\/Reference\/dataserver___distributed.html","attributes": {"data-id":"dataserver___distributed",},"menu": {"hasChildren":false,},"tocID":"dataserver___distributed-d62e758","topics":[]},{"title":"Elasticsearch node","shortdesc":"<p class=\"shortdesc\">The required memory depends on the index size that is handled by the data node. For a         better performance, consider increasing the memory. The total memory available to the node         must be distributed between the host operating system, the Elasticsearch java heap space,         and the kernel file system caches.</p>","href":"oxy_ex-1\/Reference\/each_elasticsearch_node.html","attributes": {"data-id":"each_elasticsearch_node",},"menu": {"hasChildren":false,},"tocID":"each_elasticsearch_node-d62e771","topics":[]}]});